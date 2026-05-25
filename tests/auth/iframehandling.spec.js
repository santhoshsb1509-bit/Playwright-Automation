import {test, expect} from '@playwright/test'

test('iframe handling', async ({ page }) => {
    
    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Get all available frames/iframes present on the page
    const frames = await page.frames();

    // Printing total number of frames in console
    console.log('Number of frames:', frames.length);

    //Accessing iframe using frameLocator()
    const newframe = await page.frameLocator('#singleframe').getByRole('textbox')

    //Enter text inside iframe textbox
    await newframe.fill('Testing iframe')
    await page.waitForTimeout(5000)
})