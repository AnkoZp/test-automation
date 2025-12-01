import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main.page';
import { CartModalComponent } from 'src/components/cart-modal.component';
import { CategoriesMenuComponents } from 'src/components/categories-menu.components';

test.describe('Currency and language', () => {
    let mainPage: MainPage;
    let categoriesMenuComponents: CategoriesMenuComponents;

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

    test ('Check categories menu', async ({ page }) => {
        categoriesMenuComponents = new CategoriesMenuComponents(page);
        await categoriesMenuComponents.expectCategoriesMenuDisplayed();
        await categoriesMenuComponents.expectCategoryDisplayed('Ноутбуки');
        await categoriesMenuComponents.expectCategoryDisplayed('Планшети');
        await categoriesMenuComponents.expectCategoryDisplayed('Смартфони');
        await categoriesMenuComponents.expectCategoryDisplayed('Ігри');
        await categoriesMenuComponents.expectCategoryDisplayed('Телевізори');
    });

    test('Click on category', async ({ page }) => {
        const expectedUrl = 'https://demo.solomono.net/noutbuki/c-378.html';

        categoriesMenuComponents = new CategoriesMenuComponents(page);
        await categoriesMenuComponents.expectCategoriesMenuDisplayed();
        await categoriesMenuComponents.clickCategory('Ноутбуки');
        await expect(page).toHaveURL(expectedUrl);
    });

    test('Add product to cart', async ({ page }) => {
        await page.waitForLoadState('networkidle');

        await mainPage.expectAddProductToCartButtonDisplayed();
        await mainPage.addProductToCart();
        await page.waitForTimeout(2000);
        const cartModalComponent = new CartModalComponent(page);
        await cartModalComponent.expectCartDisplayed();
        await cartModalComponent.expectCartTotalDisplayed();
        const titles = await cartModalComponent.getCartItemsTitles();
        console.log('Cart items titles:', titles);
    });
});
