const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Authentication Suite', () => {
  test('The page does not load the username input when running in parallel, possibly due to app rate limiting or caching issues.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(/requestPasswordResetCode/);
    await loginPage.resetPassword('Admin');
    //await expect(page.locator('.oxd-text--toast-message')).toBeVisible();
  });
});