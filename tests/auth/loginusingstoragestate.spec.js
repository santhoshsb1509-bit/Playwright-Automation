import {test, expect} from '@playwright/test'

// test.describe('login using storage state', () => {
//   test('should log in successfully with stored credentials', async ({page }) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     await page.waitForTimeout(5000)
//   })
// });

test.describe('login using storage state', () => {
  test('should log in successfully with stored credentials', async ({browser }) => {
    const context= await browser.newContext({ storageState: 'storageState.json' });
    const page= await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(5000)
  });
});