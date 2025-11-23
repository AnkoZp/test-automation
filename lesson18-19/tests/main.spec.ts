import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';

test.describe('Currency and language', () => {
    let mainPage: MainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);

        await mainPage.open('/');
    });

    test('Check elements on the Main page', async ({ page }) => {
        await expect(await mainPage.getPageURL()).toContain('https://demo.solomono.net');
        await expect(await mainPage.isCurrencySelectDisplayed()).toBe(true);
        await expect(await mainPage.isLanguageSelectorDisplayed()).toBe(true);
    });

    test('Change currency and language', async ({ page }) => {
        await mainPage.setCurrency('EUR');
        const productPrice = page.locator('//p[@class="price"]/span');
        await expect(productPrice.first()).toContainText('€');

        await mainPage.setLanguage('pl');
        await expect(await mainPage.getPageURL()).toContain('pl/');
    });

});
