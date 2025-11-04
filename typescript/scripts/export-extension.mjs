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

function runCommand(command, args, { repoRoot, description }) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_PRIVATE_BUILD_SKIP_GET_STATIC_EXPORT: '1',
    },
  });

  if (result.status !== 0) {
    const cause =
      result.error ??
      new Error(`${description} exited with status ${result.status}`);
    throw cause;
  }
}

function ensureStaticExport({ repoRoot, exportDir }) {
  const staticIndexPath = path.join(exportDir, 'index.html');

  if (!fs.existsSync(staticIndexPath) || process.env.FLOWHUB_FORCE_NEXT_BUILD === '1') {
    runCommand('pnpm', ['exec', 'next', 'build'], {
      repoRoot,
      description: 'next build',
    });
  }

  ensureExists(staticIndexPath, 'Next.js static index file');

  return { outputDir: exportDir };
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
