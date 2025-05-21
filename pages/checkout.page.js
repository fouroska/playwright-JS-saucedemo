exports.CheckoutPage = class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.cartItem = page.locator('.cart_item');
    this.total = page.locator('.summary_total_label');
  }

  async fillShippingInfo() {
    await this.firstNameInput.fill('Dimi');
    await this.lastNameInput.fill('Kafou');
    await this.postalCodeInput.fill('12345');
    await this.continueButton.click();
  }

  async completeCheckout() {
    await this.finishButton.click();
  }

  async getTotal() {
    return await this.total.textContent();
  }
};
