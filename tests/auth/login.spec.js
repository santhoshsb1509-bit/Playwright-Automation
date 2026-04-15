import {test, expect, chromium} from '@playwright/test'
import { signup } from '../../pages/signuppage'

test ('testing signup', async () => {
        const browser=await chromium.launch()
        const context=await browser.newContext()
        const page=await context.newPage()
        await page.goto('https://bolt.playrealbrokerage.com/login');
        await expect(page).toHaveTitle('Login - Bolt')
        //await page.pause()
  //const pagepromise=await context.waitForEvent('page') 
        await page.getByText('Join Real', { exact: true }).click()
        //const newpage= await pagepromise;
        //await expect(newpage).toHaveTitle('One Real: Registration - ReZEN Agents')
        //await newpage.waitForLoadState();
       const acccoutcre= new signup (page);
       await acccoutcre.createaccount('Santhosh','SB','santhoshtest','santhoshtest@gmail.com','Password@123')
    await page.waitForTimeout(5000)
    }
)