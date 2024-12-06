import test, { Page } from "@playwright/test"

export class Jesse {
  constructor(public readonly page: Page) {}

  async goToPage() {
    await test.step('Open Jesse Page', async () => {
      await this.page.goto('https://localhost:5173/jesse/');
    });
  }
}