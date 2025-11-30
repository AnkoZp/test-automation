import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { MainPage } from '../../src/pages/main.page';

import { CustomWorld } from '../../cucumber.config';

let mainPage: MainPage;

Given('I am on the main page', async function (this: CustomWorld) {
    await this.init();
    mainPage = new MainPage(this.page);
    await mainPage.open('/');
});

Then('I should see the currency selector', async function (this: CustomWorld) {
    await mainPage.expectCurrencySelectDisplayed();
});

Then('I should see the language selector', async function (this: CustomWorld) {
    await mainPage.expectLanguageSelectorDisplayed();
});

When('I change the currency to {string}', async function (this: CustomWorld, currency: string) {
    await mainPage.setCurrency(currency);
});

Then('the product price should display the {string} symbol', async function (this: CustomWorld, symbol: string) {
    const productPrice = (await mainPage.getProductPriceLocator()).first();
    await expect(productPrice).toHaveText(new RegExp(symbol));
});

When('I change the language to {string}', async function (this: CustomWorld, language: string) {
    await mainPage.setLanguage(language);
});

Then('the URL should contain {string}', async function (this: CustomWorld, urlPart: string) {
    const url = await mainPage.getPageURL();
    expect(url).toContain(urlPart);
});

Then('I should see the login link', async function (this: CustomWorld) {
    await mainPage.expectLogIntoAccDisplayed();
});

Given('I click on the login link', async function (this: CustomWorld) {
    await mainPage.pressLogIntoAcc();
});

Then('I should see the log off link', async function (this: CustomWorld) {
    await mainPage.expectLogOffDisplayed();
});

When('I click the log off link', async function (this: CustomWorld) {
    await mainPage.pressLogOff();
});

After(async function (this: CustomWorld) {
    if (this.browser) {
        await this.close();
    }
});
