import {test, expect} from '@playwright/test'

test('file download test', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    const downloadpromise= page.waitForEvent("download");
    await page.locator("a[type='button']").click()
    const download= await downloadpromise; 
    const filename= download.suggestedFilename();
    console.log(filename)
    await download.saveAs('H:\Playwright Automation\Download' + filename)
    await page.waitForTimeout(5000)

})
