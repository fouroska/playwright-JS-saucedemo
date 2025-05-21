const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('verify inventory page displays all products', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Go to login
  await page.goto('/');

  // Login with valid credentials
  //await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.loginWithValidCredentials();

  // URL check
  await expect(page).toHaveURL(/.*inventory/);

  // Product count
  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6);

  // Each product has name, price, and image
  for (let i = 0; i < 6; i++) {
    const item = products.nth(i);
    await expect(item.locator('.inventory_item_name')).toBeVisible();
    await expect(item.locator('.inventory_item_price')).toBeVisible();
    await expect(item.locator('img')).toBeVisible();
    await expect(item.locator('button')).toHaveText(/Add to cart/i);
  }
});