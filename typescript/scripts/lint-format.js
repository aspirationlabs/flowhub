#!/usr/bin/env node

import { spawn } from 'node:child_process';

const rawFiles = process.argv.slice(2);

// Strip 'typescript/' prefix from file paths since we're running from within typescript/
const files = rawFiles.map((file) => {
  return file.startsWith('typescript/') ? file.slice('typescript/'.length) : file;
});

const run = (command, args, label) => {
  const controller = {
    child: null,
    forceTerminated: false,
    kill(signal = 'SIGTERM') {
      if (this.child && !this.child.killed) {
        this.forceTerminated = true;
        console.warn(`Stopping ${label} after failure (${signal})...`);
        this.child.kill(signal);
      }
    },
    promise: Promise.resolve(),
  };

  controller.promise = new Promise((resolve, reject) => {
    console.log(`Starting: ${label}`);
    const child = spawn(command, args, { stdio: 'inherit' });
    controller.child = child;

    const cleanup = () => {
      controller.child = null;
    };

    child.on('error', (error) => {
      cleanup();
      console.error(`${label} failed to start:`, error);
      reject(new Error(`${label} failed to start`));
    });

    child.on('close', (code, signal) => {
      cleanup();

      if (code !== 0) {
        if (controller.forceTerminated) {
          console.warn(`${label} terminated early.`);
          resolve();
          return;
        }

        console.error(
          `${label} exited with code ${code}${signal ? ` (signal: ${signal})` : ''}`,
        );
        const exitDetail = signal ? `signal ${signal}` : `exit code ${code}`;
        reject(new Error(`${label} failed with ${exitDetail}`));
        return;
      }

      console.log(`${label} completed successfully`);
      resolve();
    });
  });

  return controller;
};

const unique = (list) => Array.from(new Set(list));
const lintTargets = unique(files.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file)));

// Prepare all checks to run in parallel
const checks = [];

// ESLint
if (lintTargets.length > 0) {
  checks.push(
    run(
      'pnpm',
      ['exec', 'eslint', '--cache', ...lintTargets, '--no-warn-ignored'],
      'ESLint',
    ),
  );
} else {
  console.log('No files to lint.');
}

// Prettier
if (files.length > 0) {
  checks.push(
    run('pnpm', ['exec', 'prettier', '--cache', '--write', ...unique(files)], 'Prettier'),
  );
} else {
  console.log('No files to format.');
}

// Run all checks in parallel and wait for all to complete
const terminateChecks = (() => {
  let terminated = false;

  return (failingCheck) => {
    if (terminated) {
      return;
    }

    terminated = true;

    for (const check of checks) {
      if (check !== failingCheck) {
        check.kill();
      }
    }
  };
})();

if (checks.length === 0) {
  console.log('No files to check.');
  process.exit(0);
}

console.log(`Running ${checks.length} checks in parallel...`);

const checkPromises = checks.map((check) =>
  check.promise.catch((error) => {
    terminateChecks(check);
    throw error;
  }),
);

Promise.all(checkPromises)
  .then(() => {
    console.log('\nAll checks completed successfully.');
    process.exit(0);
  })
  .catch(async (error) => {
    console.error('\nLint/format checks failed:', error.message);
    await Promise.allSettled(checks.map((check) => check.promise));
    process.exit(1);
  });
