const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('successful checkout with total validation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('/');
  await loginPage.loginWithValidCredentials();

  // Add two items to the cart
  await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
  await page.click('.shopping_cart_link');

  // Proceed to checkout
  await page.click('[data-test="checkout"]');
  await checkoutPage.fillShippingInfo();

  // Assert total
  const total = await checkoutPage.getTotal();
  console.log('Total:', total);
  expect(total).toContain('Total: $'); // Loose check, improve later

  await checkoutPage.completeCheckout();

  // Assert final confirmation
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
