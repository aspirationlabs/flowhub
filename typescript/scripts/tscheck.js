#!/usr/bin/env node

import { spawn } from 'node:child_process';

const files = process.argv.slice(2);

const run = (command, args, label) => {
  return new Promise((resolve, reject) => {
    console.log(`Starting: ${label}`);
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('error', (error) => {
      console.error(`${label} failed to start:`, error);
      reject(new Error(`${label} failed to start`));
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error(`${label} exited with code ${code}`);
        reject(new Error(`${label} failed with exit code ${code}`));
      } else {
        console.log(`[SUCCESS] ${label} completed successfully`);
        resolve();
      }
    });
  });
};

const unique = (list) => Array.from(new Set(list));
const lintTargets = unique(files.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file)));

// Prepare all checks to run in parallel
const checks = [];

// TypeScript compile checks (full project)
checks.push(run('pnpm', ['run', 'typecheck'], 'TypeScript typecheck'));

// ESLint
if (lintTargets.length > 0) {
  checks.push(run('pnpm', ['exec', 'eslint', ...lintTargets, '--no-warn-ignored'], 'ESLint'));
} else {
  console.log('No files to lint.');
}

// Prettier
if (files.length > 0) {
  checks.push(run('pnpm', ['exec', 'prettier', '--check', ...unique(files), '--write'], 'Prettier'));
} else {
  console.log('No files to format.');
}

// Run all checks in parallel and wait for all to complete
console.log(`Running ${checks.length} checks in parallel...`);
Promise.all(checks)
  .then(() => {
    console.log('\nAll pre-commit checks passed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\nPre-commit checks failed:', error.message);
    process.exit(1);
  });
