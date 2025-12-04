import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../cucumber.config';
import credentials from '../../.auth/credentials.json';

When('I fill in the email field with valid credentials', async function (this: CustomWorld) {
    await this.loginPage.fillEmailField(credentials.email);
});

When('I fill in the password field with valid credentials', async function (this: CustomWorld) {
    await this.loginPage.fillPasswordField(credentials.password);
});

When('I fill in the email field with {string}', async function (this: CustomWorld, email: string) {
    await this.loginPage.fillEmailField(email);
});

When('I fill in the password field with {string}', async function (this: CustomWorld, password: string) {
    await this.loginPage.fillPasswordField(password);
});

When('I click the login button', async function (this: CustomWorld) {
    await this.loginPage.pressLoginButton();
});

Then('I should see the email field', async function (this: CustomWorld) {
    await this.loginPage.expectEmailFieldDisplayed();
});

Then('I should see the password field', async function (this: CustomWorld) {
    await this.loginPage.expectPasswordFieldDisplayed();
});

Then('I should see the login button', async function (this: CustomWorld) {
    await this.loginPage.expectLogInBtnDisplayed();
});

Then('I should be logged in successfully', async function (this: CustomWorld) {
    await this.mainPage.expectLogOffDisplayed();
});

Then('the page title should contain {string}', async function (this: CustomWorld, titlePart: string) {
    const title = await this.mainPage.getPageTitle();
    expect(title).toContain(titlePart);

    await expect(this.page).toHaveTitle(new RegExp(titlePart));
});

Then('I should see an invalid credentials alert', async function (this: CustomWorld) {
    await this.mainPage.expectVarningForInvalifLogIn();
});
