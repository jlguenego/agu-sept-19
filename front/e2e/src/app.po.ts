import { browser, by, element } from 'protractor';

export class AppPage {


  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('header span')).getText() as Promise<string>;
  }

  async clickOnCreateQuizzButton() {
    const button = element(by.css('button'));
    await button.click();
  }

  async clickOnDoQuizzButton() {
    const buttons = await element.all(by.css('button'));
    await buttons[1].click();
  }
}
