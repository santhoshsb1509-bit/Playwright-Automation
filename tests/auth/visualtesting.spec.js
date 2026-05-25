import { test, expect } from '@playwright/test'

test('visual testing', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html')
    const basegrid = page.locator('#basicBootstrapForm').locator('div').nth(10)
    await page.getByLabel('Male', { exact: true }).click();
    await page.waitForTimeout(5000);
    await expect(basegrid).toHaveScreenshot();
});