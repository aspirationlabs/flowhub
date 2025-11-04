import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(scriptDir, '..', '..');
const exportDir = path.join(repoRoot, 'typescript', '.next');
const distDir = path.join(repoRoot, 'dist');
const assetsDir = path.join(repoRoot, 'typescript', 'assets', 'icons');
const manifestPath = path.join(repoRoot, 'typescript', 'manifest.json');

function ensureExists(targetPath, description) {
  if (!fs.existsSync(targetPath)) {
    throw new Error(`${description} not found at ${targetPath}`);
  }
}

function copyRecursive(source, destination) {
  fs.cpSync(source, destination, { recursive: true, force: true });
}

function main() {
  ensureExists(exportDir, 'Next.js static export');
  ensureExists(manifestPath, 'Extension manifest');
  ensureExists(assetsDir, 'Generated icon assets');

  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  copyRecursive(exportDir, distDir);

  const distIconsDir = path.join(distDir, 'icons');
  fs.mkdirSync(distIconsDir, { recursive: true });
  copyRecursive(assetsDir, distIconsDir);

  fs.copyFileSync(manifestPath, path.join(distDir, 'manifest.json'));
}

try {
  main();
} catch (error) {
  console.error('Failed to prepare extension bundle:', error);
  process.exit(1);
}
