import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

// Helper to load page and wait for hydration
async function loadPage(page: any) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');
}

test.describe('Connectors E2E', () => {
  test('should open settings sidebar and display connectors list', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await expect(settingsButton).toBeVisible();

    await settingsButton.click();

    // Sidebar should appear
    const heading = page.getByRole('heading', { name: /connectors/i });
    await expect(heading).toBeVisible();

    const exampleConnector = page.getByRole('heading', { name: 'Example' });
    await expect(exampleConnector).toBeVisible();
  });

  test('should connect to Example connector without API key', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const connectButton = page.getByRole('button', { name: /connect example/i });
    await expect(connectButton).toBeVisible();

    await connectButton.click();

    const modalHeading = page.getByRole('heading', { name: /configure example/i });
    await expect(modalHeading).toBeVisible();

    const modalConnectButton = page.getByRole('button', { name: /^connect$/i });
    await expect(modalConnectButton).toBeVisible();
    await expect(modalConnectButton).not.toBeDisabled();

    await modalConnectButton.click();

    // Wait for modal to close (configure modal closes, but sidebar stays open)
    await expect(modalHeading).not.toBeVisible();

    const connectedBadge = page.getByText('Connected');
    await expect(connectedBadge).toBeVisible();

    // Verify plug button appears for connected connector
    const plugButton = page.getByRole('button', { name: /disconnect example/i });
    await expect(plugButton).toBeVisible();
  });

  test('should display plug icon for connected connector', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const connectButton = page.getByRole('button', { name: /connect example/i });
    await connectButton.click();

    const modalConnectButton = page.getByRole('button', { name: /^connect$/i });
    await modalConnectButton.click();

    const plugButton = page.getByRole('button', { name: /disconnect example/i });
    await expect(plugButton).toBeVisible();
  });

  test('should disconnect via plug icon with confirmation modal', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const connectButton = page.getByRole('button', { name: /connect example/i });
    await connectButton.click();

    const modalHeading = page.getByRole('heading', { name: /configure example/i });
    await expect(modalHeading).toBeVisible();

    const modalConnectButton = page.getByRole('button', { name: /^connect$/i });
    await modalConnectButton.click();

    // Wait for connect modal to close
    await expect(modalHeading).not.toBeVisible();

    const plugButton = page.getByRole('button', { name: /disconnect example/i });
    await expect(plugButton).toBeVisible();
    await plugButton.click();

    const disconnectHeading = page.getByRole('heading', { name: /disconnect example/i });
    await expect(disconnectHeading).toBeVisible();

    const confirmationText = page.getByText(/you can reconnect anytime/i);
    await expect(confirmationText).toBeVisible();

    const disconnectButton = page.getByRole('button', { name: /^disconnect$/i });
    await expect(disconnectButton).toBeVisible();
    await disconnectButton.click();

    // Wait for disconnect modal to close
    await expect(disconnectHeading).not.toBeVisible();

    // Wait for the sidebar to still be visible (only modal closes)
    const heading = page.getByRole('heading', { name: /connectors/i });
    await expect(heading).toBeVisible();

    const connectedBadge = page.getByText('Connected');
    await expect(connectedBadge).not.toBeVisible();

    // Verify Connect button reappears
    const newConnectButton = page.getByRole('button', { name: /connect example/i });
    await expect(newConnectButton).toBeVisible();
  });

  test('should display connector icon', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const connectorIcon = page.locator('.lucide-bot').first();
    await expect(connectorIcon).toBeVisible();
  });

  test('should close sidebar with close button', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const heading = page.getByRole('heading', { name: /connectors/i });
    await expect(heading).toBeVisible();

    const closeButton = page.getByRole('button', { name: /close/i });
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await expect(heading).not.toBeVisible();
  });

  test('should persist connector state across page reloads', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    await settingsButton.click();

    const connectButton = page.getByRole('button', { name: /connect example/i });
    await connectButton.click();

    const modalConnectButton = page.getByRole('button', { name: /^connect$/i });
    await modalConnectButton.click();

    const plugButton = page.getByRole('button', { name: /disconnect example/i });
    await expect(plugButton).toBeVisible();

    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');

    await settingsButton.click();

    const reloadedPlugButton = page.getByRole('button', { name: /disconnect example/i });
    await expect(reloadedPlugButton).toBeVisible();

    const connectedBadge = page.getByText('Connected');
    await expect(connectedBadge).toBeVisible();
  });

  test('should update settings button aria-label', async ({ page }) => {
    await loadPage(page);

    const settingsButton = page.getByRole('button', { name: /settings/i });
    const initialLabel = await settingsButton.getAttribute('aria-label');
    expect(initialLabel).toBe('Connector Settings');

    await settingsButton.click();

    const connectButton = page.getByRole('button', { name: /connect example/i });
    await connectButton.click();

    const modalConnectButton = page.getByRole('button', { name: /^connect$/i });
    await modalConnectButton.click();

    const closeButton = page.getByRole('button', { name: /close/i });
    await closeButton.click();

    const updatedButton = page.getByRole('button', {
      name: /settings/i,
    });
    await expect(updatedButton).toBeVisible();
    const updatedLabel = await updatedButton.getAttribute('aria-label');
    expect(updatedLabel).toBe('Connector Settings');
  });
});
