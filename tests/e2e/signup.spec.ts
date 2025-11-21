
import {test , expect} from "@playwright/test"

test.describe('Sign Up page Testing', () => {
    test("should render signup page", async ({page}) => {
        await page.goto("/signup");
    })
})