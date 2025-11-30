import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';

test.describe('Currency and language', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);

        await mainPage.open('/');
    });

    test('Check elements on the Main page', async ({ page }) => {
        await expect(page).toHaveURL(/https:\/\/demo\.solomono\.net\/?/);
        await mainPage.expectCurrencySelectDisplayed();
        await mainPage.expectLanguageSelectorDisplayed();
    });

    test('Change currency and language', async ({ page }) => {
        await mainPage.setCurrency('EUR');
        const productPrice = (await mainPage.getProductPriceLocator()).first();
        await expect(productPrice).toHaveText(/€/);

        await mainPage.setLanguage('pl');
        await expect(await mainPage.getPageURL()).toContain('pl/');
    });

});
