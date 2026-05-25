import {test, expect} from '@playwright/test'

test('iframe handling', async ({ page }) => {
    
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const frames = await page.frames();
    console.log('Number of frames:', frames.length);
    const newframe = await page.frameLocator('#singleframe').getByRole('textbox')
    await newframe.fill('Testing iframe')
    await page.waitForTimeout(5000)
})