import { test } from '@playwright/test';

test('debug theme toggle', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // Wait a bit for client-side hydration
  await page.waitForTimeout(2000);

  // Get all buttons
  const buttons = await page.locator('button').all();
  console.log('Number of buttons found:', buttons.length);

  for (let i = 0; i < buttons.length; i++) {
    const ariaLabel = await buttons[i].getAttribute('aria-label');
    const text = await buttons[i].textContent();
    const classes = await buttons[i].getAttribute('class');
    console.log(`Button ${i}:`, { ariaLabel, text, classes });
  }

  // Take a screenshot
  await page.screenshot({ path: 'debug-page.png', fullPage: true });
});
