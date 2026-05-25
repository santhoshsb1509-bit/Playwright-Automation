import { test, expect } from '@playwright/test'

test('visual testing', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html')

    // Save a specific element/section inside the form
    const basegrid = page.locator('#basicBootstrapForm').locator('div').nth(10)
    await page.getByLabel('Male', { exact: true }).click();

    // Capture screenshot of selected element and compare with baseline image
    await expect(basegrid).toHaveScreenshot();
});