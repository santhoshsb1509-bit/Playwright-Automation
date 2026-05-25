import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/LoginPage';
//import logindata from '../../testdata/logindata.json'
import fs from 'fs'
const jsonpath= 'H:\\Playwright Automation\\testdata\\logindata.json'
const logindata= JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))

for (const data of logindata) {
test(`Data Driven Login Test for ${data.username}` , async ({page}) => {
const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login(data.username, data.password);
    await page.waitForTimeout(5000)
})}

