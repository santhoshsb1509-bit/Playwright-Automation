import {test, expect} from '@playwright/test'

test('file download test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html')

    // Waiting for download event before clicking download button
    const downloadpromise= page.waitForEvent("download");

    // Click on download button/link
    await page.locator("a[type='button']").click()
    const download= await downloadpromise; 

    // Get suggested file name from downloaded file
    const filename= download.suggestedFilename();
    console.log(filename)

    // Save downloaded file into local folder
    await download.saveAs('H://Playwright Automation/Download' + filename)
    await page.waitForTimeout(5000)

})
