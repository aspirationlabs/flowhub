import { test, expect } from '@playwright/test';

test.describe('Theme Toggle E2E', () => {
  test('should display light mode by default and toggle to dark mode', async ({ context }) => {
    const newPage = await context.newPage();
    await newPage.goto('chrome://newtab');
    await newPage.waitForLoadState('networkidle');

    const bgColor = await newPage.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(bgColor).toContain('rgb(255, 255, 255)');

    const themeButton = newPage.getByRole('button', { name: /light/i });
    await expect(themeButton).toBeVisible();

    await themeButton.click();
    await newPage.waitForTimeout(500);

    const darkBgColor = await newPage.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(darkBgColor).not.toContain('rgb(255, 255, 255)');

    const darkThemeButton = newPage.getByRole('button', { name: /dark/i });
    await expect(darkThemeButton).toBeVisible();
  });

  test('should persist theme across new tabs', async ({ context }) => {
    const newPage = await context.newPage();
    await newPage.goto('chrome://newtab');
    await newPage.waitForLoadState('networkidle');

    const themeButton = newPage.getByRole('button', { name: /light/i });
    await themeButton.click();
    await newPage.waitForTimeout(500);

    const secondPage = await context.newPage();
    await secondPage.goto('chrome://newtab');
    await secondPage.waitForLoadState('networkidle');

    const darkThemeButton = secondPage.getByRole('button', { name: /dark/i });
    await expect(darkThemeButton).toBeVisible();

    const darkBgColor = await secondPage.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(darkBgColor).not.toContain('rgb(255, 255, 255)');
  });

  test('should display time and date widgets', async ({ context }) => {
    const newPage = await context.newPage();
    await newPage.goto('chrome://newtab');
    await newPage.waitForLoadState('networkidle');

    const timeWidget = newPage.locator('div').filter({ hasText: /\d{1,2}:\d{2}/ }).first();
    await expect(timeWidget).toBeVisible();

    const dateWidget = newPage.locator('div').filter({ hasText: /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/ }).first();
    await expect(dateWidget).toBeVisible();
  });

  test('should have correct page title', async ({ context }) => {
    const newPage = await context.newPage();
    await newPage.goto('chrome://newtab');
    await newPage.waitForLoadState('networkidle');

    const title = await newPage.title();
    expect(title).toBe('New Tab');
  });
});
