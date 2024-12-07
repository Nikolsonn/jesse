import { Page } from "@playwright/test";

// TODO: Realize methodes for navigation insead the app
export class Navigation{
  constructor(public readonly page: Page){}

  public async test (){
    console.log('test')
  }
}