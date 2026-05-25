import { test, expect } from '@playwright/test';

test('API Login - OrangeHRM', async ({ request }) => {
// Send POST request to the login validation API
    const response = await request.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        {
            // Form data sent in request body
            form: {
                username: 'Admin',
                password: 'admin123'
            }
        }
    );
    // Printing HTTP status code in console
    console.log("Status:", response.status());
    // Verifying API response status is 200 (Success)
    expect(response.status()).toBe(200);
    // Converting response body into text format
    const responseText = await response.text();
     // Print response body in console
    console.log("Response:", responseText);
   
});