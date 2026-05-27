const { test, expect, chromium } = require('@playwright/test');

test('Login to OrangeHRM', async ({ }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  
  // Waiting for a new page/tab event before clicking the link
  const windowhandle=  context.waitForEvent('page');
  await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();

  // Storing reference of newly opened page/tab
  const newpage = await windowhandle;
  await expect(newpage).toHaveURL('https://orangehrm.com/');
  const solution = await newpage.locator("//a[normalize-space()='Solutions']")
  await solution.hover();
  await newpage.locator("//a[@href='/solutions/people-management']").click();
  await newpage.waitForTimeout(5000);
});

