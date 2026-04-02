class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.validationError = page.locator('.oxd-input-field-error-message');
    this.resetUsernameInput = page.locator('input[name="username"]'); // For forgot password page
    this.resetButton = page.getByRole('button', { name: 'Reset Password' });
    this.successMessage = page.locator('.oxd-text--toast-message');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForFunction(() => document.querySelector('input[name="username"]'));
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async getValidationError() {
    return await this.validationError.textContent();
  }

  async resetPassword(username) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.resetButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

module.exports = LoginPage;