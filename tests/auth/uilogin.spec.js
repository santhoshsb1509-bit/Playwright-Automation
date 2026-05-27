import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage';

test.describe('Authentication Suite', () => {
  test('Successful Login', async ({ page }) => {

    //Create object of LoginPage class (Page Object Model)
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Perform login by caling login function from loginpage class with valid credentials
    await loginPage.login('Admin', 'admin123');

    // Verify user is redirected to dashboard page after login
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    
    // Verify Dashboard is visible after successful login
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Save authenticated session data into storageState.json
    await page.context().storageState({ path: 'storageState.json' });
  });
});

