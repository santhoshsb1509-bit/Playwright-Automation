import {test, expect} from '@playwright/test'

test('Environment Variables', async ({page}) => {

    console.log(process.env.URL)
    console.log(process.env.APP_USERNAME)
    console.log(process.env.APP_PASSWORD)
})