import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

// TODO: Realize test scanarios for user from MIRO
test.describe('User Actions in App', async () => {
  test('Open an App', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.openTgMiniApp();

    await expect(page).toHaveScreenshot({ timeout: 0 });
  });
  test('Open User Space', async({ page }) => {
    const jesse = new Jesse(page);
    
    await jesse.openTgMiniApp();
    await jesse.navigation.openPage('user-page');
    
    await expect(page).toHaveScreenshot({ timeout: 0, fullPage: true });
  });
});