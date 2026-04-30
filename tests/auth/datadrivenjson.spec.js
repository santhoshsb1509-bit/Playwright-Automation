import {test, expect} from '@playwright/test'
import logindata from '../../testdata/logindata.json'
import logindata1 from '../../testdata/logindata1.json'

for (const data of logindata) {
test(`Data Driven Login Test for ${data.username}` , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).fill(data.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(data.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.waitForTimeout(5000)
})}

test.skip('Data Driven Login Test for' , async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata1.invaliduser.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata1.invaliduser.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForTimeout(5000)
})
