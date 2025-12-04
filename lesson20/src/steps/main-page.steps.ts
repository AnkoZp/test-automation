import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../cucumber.config';

Given('I am on the main page', async function (this: CustomWorld) {
    await this.mainPage.open('/');
});

Then('I should see the currency selector', async function (this: CustomWorld) {
    await this.mainPage.expectCurrencySelectDisplayed();
});

Then('I should see the language selector', async function (this: CustomWorld) {
    await this.mainPage.expectLanguageSelectorDisplayed();
});

When('I change the currency to {string}', async function (this: CustomWorld, currency: string) {
    await this.mainPage.setCurrency(currency);
});

Then('the product price should display the {string} symbol', async function (this: CustomWorld, symbol: string) {
    const productPrice = (await this.mainPage.getProductPriceLocator()).first();
    await expect(productPrice).toHaveText(new RegExp(symbol));
});

When('I change the language to {string}', async function (this: CustomWorld, language: string) {
    await this.mainPage.setLanguage(language);
});

Then('the URL should contain {string}', async function (this: CustomWorld, urlPart: string) {
    const url = await this.mainPage.getPageURL();
    expect(url).toContain(urlPart);
});

Then('I should see the login link', async function (this: CustomWorld) {
    await this.mainPage.expectLogIntoAccDisplayed();
});

Given('I click on the login link', async function (this: CustomWorld) {
    await this.mainPage.pressLogIntoAcc();
});

Then('I should see the log off link', async function (this: CustomWorld) {
    await this.mainPage.expectLogOffDisplayed();
});

When('I click the log off link', async function (this: CustomWorld) {
    await this.mainPage.pressLogOff();
});
