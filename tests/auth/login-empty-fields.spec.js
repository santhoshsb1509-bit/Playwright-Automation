const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Authentication Suite', () => {
  test('Login with Empty Fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickLogin();
    await expect(page.getByText('Required').first()).toBeVisible();
  });
});