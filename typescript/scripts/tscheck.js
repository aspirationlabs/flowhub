#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const files = process.argv.slice(2);

const run = (command, args, label) => {
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.error) {
    console.error(`${label} failed to start:`, result.error);
    process.exit(1);
  }
  if (result.status !== 0) {
    process.exit(result.status);
  }
};

const unique = (list) => Array.from(new Set(list));
const lintTargets = unique(files.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file)));

// TypeScript compile checks (full project)
run('pnpm', ['run', 'typecheck'], 'TypeScript typecheck');

if (lintTargets.length > 0) {
  run('pnpm', ['exec', 'eslint', ...lintTargets], 'ESLint');
} else {
  console.log('No files to lint.');
}

if (files.length > 0) {
  run('pnpm', ['exec', 'prettier', '--check', ...unique(files)], 'Prettier');
} else {
  console.log('No files to format.');
}
