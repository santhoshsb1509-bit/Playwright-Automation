const { test, expect } = require('@playwright/test');

test('Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com')
    //await page.context().waitForEvent('page');
    // const text = await page.getByRole('combobox', { name: 'Country:' }).textContent();
    // await page.waitForTimeout(5000)
    // await page.getByRole('combobox', { name: 'Country:' }).selectOption('Germany');
    // console.log(text);
       await page.getByRole('textbox', { name: 'Select an item' }).click();
       const value=await page.locator('#dropdown').textContent();
       console.log(value);
       await page.locator('#dropdown', { name: 'Item 2' }).click();
       await page.waitForTimeout(5000)

       
});