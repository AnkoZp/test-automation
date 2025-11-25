import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {

    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;

    public constructor(page: Page, baseUrl?: string) {
        super(page, baseUrl);
        this.emailField = page.locator('//form[@name="login"]//input[@type="email"]');
        this.passwordField = page.locator('//form[@name="login"]//input[@type="password"]');
        this.loginButton = page.locator('//form[@name="login"]//button[@type="submit"]');
    }

    public async expectEmailFieldDisplayed(): Promise<void> {
        await expect(this.emailField).toBeVisible();
    }

    public async expectPasswordFieldDisplayed(): Promise<void> {
        await expect(this.passwordField).toBeVisible();
    }

    public async expectLogInBtnDisplayed(): Promise<void> {
        await expect(this.loginButton).toBeVisible();
    }

    public async fillEmailField(email: string): Promise<void> {
        return this.emailField.fill(email);
    }

    public async fillPasswordField(password: string): Promise<void> {
        return this.passwordField.fill(password);
    }

    public async pressLoginButton(): Promise<void> {
        return this.loginButton.click();
    }
}

