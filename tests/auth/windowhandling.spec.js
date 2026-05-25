const { test, expect, chromium } = require('@playwright/test');

test('Login to OrangeHRM', async ({ }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  const windowhandle=  context.waitForEvent('page');
  await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
  const newpage = await windowhandle;
  await expect(newpage).toHaveURL('https://orangehrm.com/');
});

