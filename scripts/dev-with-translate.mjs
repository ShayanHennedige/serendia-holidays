import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import net from 'node:net';

const projectRoot = process.cwd();
const translator = join(projectRoot, '.libretranslate-venv', 'bin', 'libretranslate');
const requiredLanguages = ['en', 'fr', 'de', 'it', 'es', 'lt'];
const translatorUrl = process.env.LIBRETRANSLATE_URL || 'http://127.0.0.1:5100';
const translatorAddress = new URL(translatorUrl);
const translatorHost = translatorAddress.hostname;
const translatorPort = Number(translatorAddress.port || 5100);

function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: '127.0.0.1', port });
    socket.once('connect', () => {
      socket.end();
      resolve(true);
    });
    socket.once('error', () => resolve(false));
  });
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForTranslator() {
  for (let attempt = 0; attempt < 90; attempt += 1) {
    try {
      const response = await fetch(`${translatorUrl.replace(/\/$/, '')}/languages`);
      const languages = await response.json();
      const available = new Set(Array.isArray(languages) ? languages.map((language) => language?.code) : []);
      if (requiredLanguages.every((language) => available.has(language))) return true;
    } catch {
      // The process can have an open port while the translation models are still loading.
    }
    await wait(1_000);
  }
  return false;
}

if (!existsSync(translator)) {
  console.error('LibreTranslate is not installed. Run: python3 -m venv .libretranslate-venv && .libretranslate-venv/bin/pip install libretranslate');
  process.exit(1);
}

const translatorAlreadyRunning = await isPortOpen(translatorPort);
const translationProcess = translatorAlreadyRunning ? null : spawn(
  translator,
  ['--load-only', 'en,fr,de,it,es,lt', '--host', translatorHost, '--port', String(translatorPort)],
  {
    cwd: projectRoot,
    env: {
      ...process.env,
      XDG_DATA_HOME: join(projectRoot, '.libretranslate-data'),
      XDG_CONFIG_HOME: join(projectRoot, '.libretranslate-config'),
      XDG_CACHE_HOME: join(projectRoot, '.libretranslate-cache'),
    },
    stdio: 'inherit',
  },
);

if (translatorAlreadyRunning) console.log(`Using the LibreTranslate service already running on ${translatorUrl}`);

if (!await waitForTranslator()) {
  console.error('LibreTranslate did not become ready with all configured languages.');
  translationProcess?.kill('SIGTERM');
  process.exit(1);
}

const nextProcess = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'dev'], {
  cwd: projectRoot,
  env: process.env,
  stdio: 'inherit',
});

let stopping = false;
const stop = (code = 0) => {
  if (stopping) return;
  stopping = true;
  translationProcess?.kill('SIGTERM');
  nextProcess.kill('SIGTERM');
  process.exit(code);
};

process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
translationProcess?.on('exit', (code) => {
  if (!stopping) stop(code ?? 1);
});
nextProcess.on('exit', (code) => stop(code ?? 0));
