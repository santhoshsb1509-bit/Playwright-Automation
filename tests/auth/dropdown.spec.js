const { test, expect } = require('@playwright/test');

test('Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com')

    // Click on the dropdown input field
    await page.getByRole('textbox', { name: 'Select an item' }).click();

    // Capturing all dropdown text values
    const value = await page.locator('#dropdown').textContent();
    console.log(value);

    // Selecting "Item 2" from the dropdown
    await page.locator('#dropdown', { name: 'Item 2' }).click();
    await page.waitForTimeout(5000)
});