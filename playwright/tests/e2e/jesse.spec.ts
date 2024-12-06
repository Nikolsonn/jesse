import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

test.describe('Verify App', async () => {
  test('Successful user road in the app', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.goToPage();

    await expect(page).toHaveScreenshot({ timeout: 0 });
  })
});