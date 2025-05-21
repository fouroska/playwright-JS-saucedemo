# Playwright Automated Tests for SauceDemo

## Overview
This project contains automated UI tests for the [SauceDemo](https://www.saucedemo.com/) web application, implemented using Playwright and JavaScript. The tests cover core functionalities such as login, product inventory display, sorting, cart operations, and checkout flow.

---

## Test Cases

### 1. Login Tests
- **Valid Login**: Verify that a user can log in with correct credentials (`standard_user` / `secret_sauce`).
- **Invalid Login**: Verify that a user cannot log in with incorrect credentials and appropriate error message is displayed.

### 2. Inventory Tests
- **Inventory Display**: Confirm that products are correctly displayed after successful login.
- **Sorting Products**: Verify that sorting functionality (e.g., Price: low to high) works as expected.

### 3. Cart Tests
- **Add to Cart**: Verify that products can be added to the cart.
- **Remove from Cart**: Verify that products can be removed from the cart.
- **Cart Contents**: Confirm that the cart displays the correct items.

### 4. Checkout Tests
- **Checkout Flow**: Validate the complete checkout process including user info, overview, and completion pages.
- **Order Confirmation**: Confirm that the final page shows the "Thank you for your order!" message.

---

## Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npx playwright install` to install required browsers
4. Run tests using `npx playwright test`

---

## Notes

- Base URL is set in `playwright.config.js` for easy environment configuration.
- Tests use Page Object Model for maintainability and reuse.
- Test results and traces are saved under `test-results/`.
- Add your `.gitignore` to exclude `node_modules/` and `test-results/` directories.

