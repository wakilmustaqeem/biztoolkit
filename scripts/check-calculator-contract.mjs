import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'calculator-manifest.json'), 'utf8'));
const routes = fs.readdirSync(path.join(root, 'app'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.endsWith('-calculator'))
  .map((entry) => entry.name)
  .sort();

const baseline = new Set(manifest.baseline ?? []);
const batches = new Set((manifest.batches ?? []).map((item) => item.slug));
const expected = new Set([...baseline, ...batches]);
const failed = [];

for (const route of routes) {
  const page = path.join(root, 'app', route, 'page.tsx');
  if (!fs.existsSync(page)) {
    failed.push(`Missing page.tsx: ${route}`);
    continue;
  }
  const content = fs.readFileSync(page, 'utf8');
  for (const signal of manifest.requiredPageSignals ?? []) {
    if (!content.includes(signal)) failed.push(`Missing ${signal}: ${route}`);
  }
}

for (const route of expected) {
  if (!routes.includes(route) && route !== 'inflation-calculator') {
    failed.push(`Manifest route missing from app: ${route}`);
  }
}

console.log(`Standalone calculator routes: ${routes.length}`);
console.log(`Target: ${manifest.target}`);
console.log(`Routes: ${routes.join(', ')}`);

if (routes.length < manifest.target) {
  failed.push(`Target not reached: need ${manifest.target - routes.length} more standalone calculator pages.`);
}

if (failed.length) {
  console.error('\nCalculator governance failures:');
  for (const item of failed) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Calculator governance contract passed.');
