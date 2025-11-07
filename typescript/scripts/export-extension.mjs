// Prepares the statically exported Next.js app for packaging as a browser extension.
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

function runCommand(command, args, { repoRoot, description, env = {} }) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      ...env,
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
  const candidateDirs = Array.from(
    new Set([
      exportDir,
      path.join(repoRoot, 'out'),
      path.join(repoRoot, '.next'),
    ]),
  );

  const hasStaticExport = candidateDirs.some((dir) => fs.existsSync(path.join(dir, 'index.html')));
  const shouldRebuild = process.env.FLOWHUB_FORCE_NEXT_BUILD === '1' || !hasStaticExport;

  if (shouldRebuild) {
    runCommand('pnpm', ['exec', 'next', 'build', '--webpack'], {
      repoRoot,
      description: 'next build',
    });
  }

  const resolvedDir = candidateDirs.find((dir) => fs.existsSync(path.join(dir, 'index.html')));

  if (!resolvedDir) {
    throw new Error('Next.js static index file not found after build.');
  }

  ensureExists(path.join(resolvedDir, 'index.html'), 'Next.js static index file');

  return { outputDir: resolvedDir };
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(scriptDir, '..');

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
