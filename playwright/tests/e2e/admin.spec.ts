import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

// TODO: Realize test scanarios for admin from MIRO
test.describe('Admin Actions in App', async () => {
  test('Open an App', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.openTgMiniApp();

    await expect(page).toHaveScreenshot({ timeout: 0 });
  });
  test('Open Admin Space', async({ page }) => {
    const jesse = new Jesse(page);
    
    await jesse.openTgMiniApp();
    await jesse.navigation.openPage('admin-page');
    
    await expect(page).toHaveScreenshot({ timeout: 0, fullPage: true });
  });
});