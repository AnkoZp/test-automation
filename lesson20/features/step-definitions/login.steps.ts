import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { MainPage } from '../../src/pages/main.page';
import { LoginPage } from '../../src/pages/login.page';
import { CustomWorld } from '../../cucumber.config';
import credentials from '../../.auth/credentials.json';

let loginPage: LoginPage;
let mainPage: MainPage;

When('I fill in the email field with valid credentials', async function (this: CustomWorld) {
    loginPage = new LoginPage(this.page);
    await loginPage.fillEmailField(credentials.email);
});

When('I fill in the password field with valid credentials', async function (this: CustomWorld) {
    await loginPage.fillPasswordField(credentials.password);
});

When('I fill in the email field with {string}', async function (this: CustomWorld, email: string) {
    loginPage = new LoginPage(this.page);
    await loginPage.fillEmailField(email);
});

When('I fill in the password field with {string}', async function (this: CustomWorld, password: string) {
    await loginPage.fillPasswordField(password);
});

When('I click the login button', async function (this: CustomWorld) {
    await loginPage.pressLoginButton();
});

Then('I should see the email field', async function (this: CustomWorld) {
    loginPage = new LoginPage(this.page);
    await loginPage.expectEmailFieldDisplayed();
});

Then('I should see the password field', async function (this: CustomWorld) {
    await loginPage.expectPasswordFieldDisplayed();
});

Then('I should see the login button', async function (this: CustomWorld) {
    await loginPage.expectLogInBtnDisplayed();
});

Then('I should be logged in successfully', async function (this: CustomWorld) {
    mainPage = new MainPage(this.page);
    await mainPage.expectLogOffDisplayed();
});

Then('the page title should contain {string}', async function (this: CustomWorld, titlePart: string) {
    mainPage = new MainPage(this.page);
    const title = await mainPage.getPageTitle();
    expect(title).toContain(titlePart);

    await expect(this.page).toHaveTitle(new RegExp(titlePart));
});

Then('I should see an invalid credentials alert', async function (this: CustomWorld) {
    mainPage = new MainPage(this.page);
    await mainPage.expectVarningForInvalifLogIn();
});
