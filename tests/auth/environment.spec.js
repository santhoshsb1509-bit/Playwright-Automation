import {test, expect} from '@playwright/test'

test('Environment Variables', async ({page}) => {

    console.log(process.env.URL)
    console.log(process.env.username)
    console.log(process.env.password)
})