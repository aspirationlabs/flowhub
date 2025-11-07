import { test, expect } from '@playwright/test';
import { LocalStorageKey } from 'storage/local/keys';

test.describe.configure({ mode: 'serial' });

test.describe('Theme Toggle E2E', () => {
  test('should display light mode by default and toggle to dark mode', async ({
    context,
  }) => {
    const page = await context.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const initialTheme = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(initialTheme).toBe(false);

    const toggleToDark = page.getByRole('button', { name: /switch to dark mode/i });
    await expect(toggleToDark).toBeVisible();

    await toggleToDark.click();
    await page.waitForFunction(() => document.documentElement.classList.contains('dark'));

    const toggledTheme = await page.evaluate(() =>
      document.documentElement.classList.contains('dark'),
    );
    expect(toggledTheme).toBe(true);

    const toggleToLight = page.getByRole('button', { name: /switch to light mode/i });
    await expect(toggleToLight).toBeVisible();
  });

  test('should persist theme across new tabs', async ({ context }) => {
    const firstPage = await context.newPage();
    await firstPage.goto('/', { waitUntil: 'domcontentloaded' });

    const toggleToDark = firstPage.getByRole('button', { name: /switch to dark mode/i });
    await toggleToDark.click();
    await expect(
      firstPage.getByRole('button', { name: /switch to light mode/i }),
    ).toBeVisible();

    const storedTheme = await firstPage.evaluate((storageKey) => {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        return null;
      }
      try {
        const parsed = JSON.parse(raw);
        return typeof parsed === 'object' && parsed !== null ? parsed.theme : null;
      } catch {
        return null;
      }
    }, `flowhub-${LocalStorageKey.SYSTEM_PREFERENCES}`);
    expect(storedTheme).toBe('dark');

    const secondPage = await context.newPage();
    await secondPage.goto('/', { waitUntil: 'domcontentloaded' });
    await secondPage.waitForFunction(() =>
      document.documentElement.classList.contains('dark'),
    );

    const toggleToLight = secondPage.getByRole('button', {
      name: /switch to light mode/i,
    });
    await expect(toggleToLight).toBeVisible();
  });

  test('should display time and date widgets', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const timeWidget = page.getByTestId('time-widget');
    await expect(timeWidget).toBeVisible();
    await expect(timeWidget).toContainText(/\d{1,2}:\d{2}/);

    const dateWidget = page.getByTestId('date-widget');
    await expect(dateWidget).toBeVisible();
    await expect(dateWidget).toContainText(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b/i);
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle('New Tab');
  });
});
