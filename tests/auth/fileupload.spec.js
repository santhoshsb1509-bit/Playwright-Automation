import { test, expect } from '@playwright/test'

test('file upload test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Upload a file using setInputFiles() and provide the path of the file to upload
    await page.locator('#singleFileInput').setInputFiles('testdata/MPCS SAGARANAHALLI BILL.pdf')
    await page.waitForTimeout(5000) 
}) 