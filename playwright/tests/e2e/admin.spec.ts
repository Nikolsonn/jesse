import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

// TODO: Realize test scanarios for admin from MIRO
test.describe('Admin Actions in App', async () => {
  test('Admin open Ad', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.openTgMiniApp('https://localhost:5173/jesse/');

    await expect(page).toHaveScreenshot({ timeout: 0 });
  });
});