import test, { Page } from "@playwright/test";

export class Navigation{
  constructor(public readonly page: Page){}

  public async openPage(pageId: string): Promise<void> {
    await test.step(`Open ${pageId} Space`, async () => {
      await this.page.getByTestId(pageId).click({ force: true });
    });
  }
}