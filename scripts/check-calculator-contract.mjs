import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'calculator-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const appDir = path.join(root, 'app');
const routes = fs.readdirSync(appDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name.endsWith('-calculator'))
  .map((entry) => entry.name)
  .sort();

const manifestEntries = [
  ...(manifest.baseline ?? []).map((slug) => ({ slug, route: `/${slug}` })),
  ...(manifest.batches ?? []).map((item) => item),
];

const failed = [];
const manifestBySlug = new Map();
const manifestByRoute = new Map();

for (const item of manifestEntries) {
  if (!item?.slug) {
    failed.push('Manifest entry missing slug.');
    continue;
  }
  const route = item.route ?? `/${item.slug}`;
  if (manifestBySlug.has(item.slug)) failed.push(`Duplicate manifest slug: ${item.slug}`);
  if (manifestByRoute.has(route)) failed.push(`Duplicate manifest route: ${route}`);
  manifestBySlug.set(item.slug, item);
  manifestByRoute.set(route, item.slug);
}

for (const route of routes) {
  const page = path.join(appDir, route, 'page.tsx');
  const manifestItem = manifestBySlug.get(route);
  if (!fs.existsSync(page)) {
    failed.push(`Missing page.tsx: ${route}`);
    continue;
  }
  if (!manifestItem) failed.push(`Calculator missing from manifest: ${route}`);
  const content = fs.readFileSync(page, 'utf8');
  for (const signal of manifest.requiredPageSignals ?? []) {
    if (!content.includes(signal)) failed.push(`Missing ${signal}: ${route}`);
  }
}

for (const item of manifestEntries) {
  if (!item?.slug) continue;
  if (!routes.includes(item.slug)) failed.push(`Manifest route missing from app: ${item.slug}`);
}

console.log(`Standalone calculator routes: ${routes.length}`);
console.log(`Release target: ${manifest.target}`);
console.log(`Development gate: PASS below target is allowed; contract violations are not.`);
console.log(`Routes: ${routes.join(', ')}`);

if (failed.length) {
  console.error('\nCalculator governance failures:');
  for (const item of failed) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Calculator development governance contract passed.');
