import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { LoginPage } from '../src/pages/login.page';
import credentials from '../.auth/credentials.json';

test.describe('Log in / log out', () => {
    let mainPage: MainPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        loginPage = new LoginPage(page);

        await mainPage.open('/');
        await mainPage.pressLogIntoAcc();
    });

    test('Check elements on the Login page', async ({ page }) => {
        await expect(await loginPage.isEmailFieldDisplayed()).toBe(true);
        await expect(await loginPage.isPasswordFieldDisplayed()).toBe(true);
        await expect(await loginPage.isLoginButtonDisplayed()).toBe(true);
    });

    test('Login as registered user', async ({ page }) => {
        await loginPage.fillEmailField(credentials.email);
        await loginPage.fillPasswordField(credentials.password);
        await loginPage.pressLoginButton();

        await expect(await mainPage.isLogOffDisplayed()).toBe(true);
        await expect(await mainPage.getPageTitle()).toContain('Solomono Template demo');
        await expect(await mainPage.getPageURL()).toContain('https://demo.solomono.net');

        await mainPage.pressLogOff();
        await expect(await mainPage.isLogIntoAccDisplayed()).toBe(true);
    });

    test('Login with invalid credentials', async ({ page }) => {
        await loginPage.fillEmailField('aapo.invalid@gamil.com');
        await loginPage.fillPasswordField('invalidPassword123');
        await loginPage.pressLoginButton();

        await expect(await mainPage.getPageURL()).toContain('/login.php?action=process');

        const errorMessage = page.locator('//div[@role="alert"]');
        await expect(errorMessage).toBeVisible();
        await expect(await mainPage.isLogIntoAccDisplayed()).toBe(true);
    });
});
