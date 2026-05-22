const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Authentication Suite', () => {
  test.skip('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.context().storageState({ path: 'storageState.json' });
  });
});

test.describe('login using storage state', () => {
  test('should log in successfully with stored credentials', async ({page, browser }) => {
    const context= await browser.newContext({ storageState: 'storageState.json' });
    const page= await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.waitForTimeout(5000)
  });
});