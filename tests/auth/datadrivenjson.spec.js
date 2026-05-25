import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/LoginPage';
//import logindata from '../../testdata/logindata.json'
import fs from 'fs'

// Path of JSON file which contains login test data
const jsonpath= 'H:\\Playwright Automation\\testdata\\logindata.json'

// Reading JSON file and convert it into JavaScript object
const logindata= JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))

// Using loop to iterate each set of login data from JSON file
for (const data of logindata) {

// Creating separate test for each user data
test(`Data Driven Login Test for ${data.username}` , async ({page}) => {

// Create object for LoginPage class
const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Perform login using username and password from JSON data
    await loginPage.login(data.username, data.password);
    await page.waitForTimeout(5000)
})}

