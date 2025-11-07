import { defineConfig, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const extensionDistPath = path.join(__dirname, 'dist');

function ensureExtensionBundle() {
  if (fs.existsSync(extensionDistPath)) {
    return extensionDistPath;
  }

  const result = spawnSync('pnpm', ['run', 'export-extension'], {
    cwd: __dirname,
    stdio: 'inherit',
    env: process.env,
  });

  if (result.status !== 0) {
    if (fs.existsSync(extensionDistPath)) {
      console.warn(
        'Failed to rebuild extension bundle; proceeding with existing dist directory.',
      );
      return extensionDistPath;
    }

    throw new Error('Failed to build extension bundle before starting Playwright tests.');
  }

  if (!fs.existsSync(extensionDistPath)) {
    throw new Error(`Extension bundle not found at ${extensionDistPath} after build.`);
  }

  return extensionDistPath;
}

const ensuredExtensionPath = ensureExtensionBundle();

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4000',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            ...(process.env.SKIP_EXTENSION
              ? []
              : [
                  `--disable-extensions-except=${ensuredExtensionPath}`,
                  `--load-extension=${ensuredExtensionPath}`,
                ]),
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled',
          ],
        },
      },
    },
  ],
  webServer: {
    command:
      'node ./node_modules/next/dist/bin/next dev --hostname 127.0.0.1 --port 4000',
    url: 'http://127.0.0.1:4000',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
