import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    
    // Verify page loads without errors
    await expect(page).toHaveURL('/');
  });

  test('should display welcome message', async ({ page }) => {
    await page.goto('/');
    
    // Check for the welcome heading
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Hello World');
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Verify the page has a title
    await expect(page).toHaveTitle(/.+/);
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(heading).toBeVisible();
  });
});
