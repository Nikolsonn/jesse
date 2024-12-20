/*
TODO: 
  Write composition tests for main/admin/user pages
  Remove(or change them into functional) visual tests from admin/user spec's
*/
import test, { expect } from "@playwright/test";
import { Jesse } from "../steps/jesse";

test.describe('App Pages', async () => {
  test('Validate Main Page', async ({ page }) => {
    const jesse = new Jesse(page);

    await jesse.openTgMiniApp();

    await expect(page).toHaveScreenshot({ timeout: 0 });
  });
  test('Validate Admin Page', async({ page }) => {
    const jesse = new Jesse(page);
    
    await jesse.openTgMiniApp();
    await jesse.navigation.openPage('admin-page');
    
    await expect(page).toHaveScreenshot({ timeout: 0, fullPage: true });
  });
  test('Validate User Page', async({ page }) => {
    const jesse = new Jesse(page);
    
    await jesse.openTgMiniApp();
    await jesse.navigation.openPage('ad-board-page');
    
    await expect(page).toHaveScreenshot({ timeout: 0, fullPage: true });
  });
  test('Validate User ad request Page', async({ page }) => {
    const jesse = new Jesse(page);
    
    await jesse.openTgMiniApp();
    await jesse.navigation.openPage('ad-request-page');
    
    await expect(page).toHaveScreenshot({ timeout: 0, fullPage: true });
  });
});
