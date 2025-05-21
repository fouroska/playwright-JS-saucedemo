const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('Login flow', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginWithValidCredentials();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_pass');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });
});