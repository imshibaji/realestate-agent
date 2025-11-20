import { test, expect } from "@playwright/test";


test.describe('Login Page' , () => {
    test('should render login form correctly', async ({ page }) => {
        // 1. go to login page
        await page.goto("/login");

        // 2. check the heading
        await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
        // 3. Check email input exists
        const emailInput = page.getByLabel("Email");
        await expect(emailInput).toBeVisible();
        // 4. Check password input exists
        const passInput = page.getByLabel("password");
        await expect(passInput).toBeVisible();
        // 5. Check sign in button
        const submitBtn = page.getByRole('button', { name: 'Sign in' });
        await expect(submitBtn).toBeVisible();
        // 6. Fill the form
        await emailInput.fill("supriyo@gmail.com");
        await passInput.fill('123');
        // 7. Click sign in
        await submitBtn.click();
        // Right now your onSubmit only console.logs.
        // We just assert page did not crash:
        await expect(page).toHaveURL("/");
    })
})