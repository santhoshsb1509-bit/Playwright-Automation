const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Authentication Suite', () => {
  test('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });
});