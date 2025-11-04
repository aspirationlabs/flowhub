import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

import exportHelpers from './export-extension-lib.cjs';

const {
  getDefaultPaths,
  prepareExtensionBundle,
  ensureExists,
} = exportHelpers;

function ensureStaticExport({ repoRoot, exportDir }) {
  const staticIndexPath = path.join(exportDir, 'index.html');

  if (fs.existsSync(staticIndexPath)) {
    return { outputDir: exportDir };
  }

  const buildResult = spawnSync('pnpm', ['exec', 'next', 'build'], {
    cwd: repoRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
    },
  });

  if (buildResult.status !== 0) {
    const cause =
      buildResult.error ??
      new Error(`next build exited with status ${buildResult.status}`);
    throw cause;
  }

  ensureExists(staticIndexPath, 'Next.js static index file');

  return {
    outputDir: exportDir,
  };
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(scriptDir, '..', '..');

function main() {
  const paths = getDefaultPaths(repoRoot);
  prepareExtensionBundle({
    repoRoot,
    ...paths,
    runExport: () =>
      ensureStaticExport({ repoRoot, exportDir: paths.exportDir }),
  });
}

try {
  main();
} catch (error) {
  console.error('Failed to prepare extension bundle:', error);
  process.exit(1);
}
