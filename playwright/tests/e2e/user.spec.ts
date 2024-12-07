import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

// TODO: Realize test scanarios for user from MIRO
test.describe('User Actions in App', async () => {
  test('User open Ad', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.openTgMiniApp('https://localhost:5173/jesse/');

    await expect(page).toHaveScreenshot({ timeout: 0 });
  });
});