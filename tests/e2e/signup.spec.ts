
import {test , expect} from "@playwright/test"

test.describe('Sign Up page Testing', () => {
    test("should render signup page", async ({page}) => {
        await page.goto("/signup");

        expect(page).toHaveTitle("/signup/");

        expect(page.getByRole("heading", { name: 'Create your account' })).toBeVisible();

        expect(page.getByLabel("Full Name")).toBeVisible();

        expect(page.getByLabel("Email address")).toBeVisible();

        expect(page.getByLabel("Password")).toBeVisible();

        expect(page.getByLabel("Confirm Password")).toBeVisible();

        const btn = page.getByRole("button", { name: "Create account" });
        expect(btn).toBeVisible();

        page.getByLabel("Password").fill("supriyo@gmail.com");

        page.getByLabel("Password").fill("12345");

        btn.click();

        await expect(page).toHaveURL("/");

    })
})