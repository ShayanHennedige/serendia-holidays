import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));

try {
  const chromiumEntry = fileURLToPath(import.meta.resolve('@sparticuz/chromium'));
  let chromiumDirectory = dirname(chromiumEntry);
  while (dirname(chromiumDirectory) !== chromiumDirectory) {
    const manifestPath = join(chromiumDirectory, 'package.json');
    if (existsSync(manifestPath)) {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
      if (manifest.name === '@sparticuz/chromium') break;
    }
    chromiumDirectory = dirname(chromiumDirectory);
  }
  const binaryDirectory = join(chromiumDirectory, 'bin');

  if (!existsSync(binaryDirectory)) {
    console.warn('Chromium binary directory was not found; skipping deployment pack creation.');
    process.exit(0);
  }

  const publicDirectory = join(projectRoot, 'public');
  const archivePath = join(publicDirectory, 'chromium-pack.tar');
  mkdirSync(publicDirectory, { recursive: true });

  const result = spawnSync('tar', ['-cf', archivePath, '-C', binaryDirectory, '.'], {
    cwd: projectRoot,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`tar exited with status ${result.status ?? 'unknown'}`);
  }

  console.info('Prepared the Chromium deployment pack.');
} catch (error) {
  console.warn('Could not prepare the Chromium deployment pack.', error);
}
