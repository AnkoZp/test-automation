import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
    private readonly logIntoAccLink: Locator;
    private readonly loginForm: Locator;
    private readonly logOffLink: Locator;
    private readonly languageSelect: Locator;
    private readonly currencySelect: Locator;
    private readonly invalidCredentialsAlert: Locator;
    private readonly productPrice: Locator;
    private readonly addProductToCartButton: Locator;

    public constructor(page: Page) {
        super(page, 'https://demo.solomono.net');
        this.logIntoAccLink = page.locator('//div[@class="enter_registration"]//*[@href="login.php"]');
        this.loginForm = page.locator('//form[@name="login"]');
        this.logOffLink = page.locator('//div[@class="enter_registration"]//*[@href="logoff.php"]');
        this.languageSelect = page.locator('//button[@class="language-dropdown-button"]');
        this.currencySelect = page.locator('//form[@name="currencies"]//*[contains(@class,"selectize-input")]');
        this.invalidCredentialsAlert = page.locator('//div[@role="alert"]');
        this.productPrice = page.locator('//p[@class="price"]/span');
        this.addProductToCartButton = page.locator('//span/a[contains(@class,"added2cart")]');
    }

    public async expectLogIntoAccDisplayed(): Promise<void> {
        await this.logIntoAccLink.waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.logIntoAccLink).toBeVisible();
    }

    public async expectLogOffDisplayed(): Promise<void> {
        await expect(this.logOffLink).toBeVisible();
    }

    public async expectLanguageSelectorDisplayed(): Promise<void> {
        await expect(this.languageSelect).toBeVisible();
    }

    public async expectCurrencySelectDisplayed(): Promise<void> {
        await expect(this.currencySelect).toBeVisible();
    }

    public async pressLogIntoAcc(): Promise<void> {
        await this.logIntoAccLink.click();
        await this.loginForm.waitFor({ state: 'visible', timeout: 5000 });
    }

    public async pressLogOff(): Promise<void> {
        await this.logOffLink.click();
    }

    public async setLanguage(language: string): Promise<void> {
        await this.languageSelect.click();
        await this.page.locator(`//a[@hreflang='${language}']`).click();
        await this.page.waitForTimeout(2000);
    }

    public async setCurrency(currency: string): Promise<void> {
        await this.currencySelect.click();
        await this.page.locator(`//div[@class='selectize-dropdown-content']//*[@data-value='${currency}']`).click();
        await this.page.waitForTimeout(2000);
    }

    public async expectVarningForInvalifLogIn(): Promise<void> {
        await expect(this.invalidCredentialsAlert).toBeVisible();
    }

    public async getProductPriceLocator(): Promise<Locator> {
        return await this.productPrice;
    }

    public async addProductToCart(): Promise<void> {
        const button = this.addProductToCartButton.first();
        await button.scrollIntoViewIfNeeded();
        await button.waitFor({ state: 'visible', timeout: 10000 });
        await this.page.screenshot({ path: 'debug3.png' });
        await button.click();
        await this.page.waitForTimeout(500);
    }

    public async expectAddProductToCartButtonDisplayed(): Promise<void> {
        await expect(this.addProductToCartButton).toBeVisible();
    }
}
