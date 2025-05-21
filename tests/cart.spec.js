const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('add a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');
  //await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.loginWithValidCredentials();

  // Click 'Add to cart' on first product
  const firstAddButton = page.locator('.inventory_item button').first();
  await firstAddButton.click();

  // Assert cart icon shows 1 item
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
