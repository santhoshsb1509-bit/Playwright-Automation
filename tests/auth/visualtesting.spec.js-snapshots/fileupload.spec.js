import { test, expect } from '@playwright/test'

test('file upload test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('H:\\Desktop\\dairy\\MPCS SAGARANAHALLI BILL.pdf')
    await page.waitForTimeout(5000)
}) 