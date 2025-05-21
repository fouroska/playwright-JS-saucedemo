const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('sort products by price low to high', async ({ page }) => {
  // Go to login page
  await page.goto('/');

  // Login with valid credentials
  const loginPage = new LoginPage(page);
  await loginPage.loginWithValidCredentials();

  // Wait for the sort dropdown to be visible 
  await page.locator('select.product_sort_container').waitFor({ state: 'visible' });

  // Select sort option: Price (low to high)
  await page.locator('select.product_sort_container').selectOption('lohi');

  // Get all the product prices
  const priceTexts = await page.locator('.inventory_item_price').allTextContents();

  // Convert prices to numbers, e.g. $7.99 -> 7.99
  const prices = priceTexts.map(text => parseFloat(text.replace('$', '')));

  // Clone and sort the prices for comparison
  const sorted = [...prices].sort((a, b) => a - b);

  // Assert original prices match the sorted ones
  expect(prices).toEqual(sorted);
});
