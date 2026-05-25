import { test, expect } from '@playwright/test';

test('API Login - OrangeHRM', async ({ request }) => {

    const response = await request.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        {
            form: {
                username: 'Admin',
                password: 'admin123'
            }
        }
    );

    console.log("Status:", response.status());
    expect(response.status()).toBe(200);
    //console.log(response.json())
    const responseText = await response.text();
    console.log("Response:", responseText);
   
});