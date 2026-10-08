// Checks that every locale in messages/ has exactly the same files and keys as English
// (including array lengths), so no page can silently fall back or crash in one language.
// Usage: node scripts/check-messages.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../messages/', import.meta.url));
const locales = readdirSync(root).filter((name) => !name.includes('.'));

function shape(value, path, out) {
  if (Array.isArray(value)) {
    out.add(`${path}[${value.length}]`);
    value.forEach((item, index) => shape(item, `${path}[${index}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) shape(child, path ? `${path}.${key}` : key, out);
  } else {
    if (typeof value !== 'string' || !value.trim()) out.add(`${path} (empty or not a string)`);
    out.add(path);
  }
  return out;
}

const load = (locale) => Object.fromEntries(
  readdirSync(join(root, locale)).map((file) => [file, shape(JSON.parse(readFileSync(join(root, locale, file), 'utf8')), '', new Set())]),
);

const reference = load('en');
let problems = 0;
for (const locale of locales.filter((name) => name !== 'en')) {
  const current = load(locale);
  for (const file of new Set([...Object.keys(reference), ...Object.keys(current)])) {
    const want = reference[file] ?? new Set();
    const have = current[file] ?? new Set();
    for (const key of want) if (!have.has(key)) { problems++; console.log(`${locale}/${file}: missing ${key}`); }
    for (const key of have) if (!want.has(key)) { problems++; console.log(`${locale}/${file}: extra ${key}`); }
  }
}
console.log(problems ? `${problems} problem(s) found` : `OK: ${locales.length} locales match`);
process.exit(problems ? 1 : 0);
