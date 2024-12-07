import test, { Page } from "@playwright/test"
import { Navigation } from "./components/navigation";

export class Jesse {
  public navigation: Navigation;

  constructor(public readonly page: Page) {
    this.navigation = new Navigation(page);
  }

  public async openTgMiniApp(url: string): Promise<void> {
    await test.step('Open Jesse Page', async () => {
      await this.page.goto(url);
    });
  }
}