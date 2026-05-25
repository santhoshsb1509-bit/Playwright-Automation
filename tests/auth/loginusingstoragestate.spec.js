import {test, expect} from '@playwright/test'

test.describe('login using storage state', () => {
  test('should log in successfully with stored credentials', async ({browser }) => {

    //Creating a new browser context using saved storage state
    const context= await browser.newContext({ storageState: 'storageState.json' });

    //Open a new page inside the authenticated browser context
    const page= await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(5000)
  });
});