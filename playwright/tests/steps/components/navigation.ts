import test, { Page } from "@playwright/test";

// TODO: Realize methodes for navigation insead the app
export class Navigation{
  constructor(public readonly page: Page){}

  public async openPage(pageId: string): Promise<void> {
    test.step(`Open ${pageId} Space`, async () => {
      await this.page.getByTestId(pageId).click({ force: true });
    });
  }
}