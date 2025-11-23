import { Locator, Page } from '@playwright/test';
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

    public async isEmailFieldDisplayed(): Promise<boolean> {
        return this.emailField.isVisible();
    }

    public async isPasswordFieldDisplayed(): Promise<boolean> {
        return this.passwordField.isVisible();
    }

    public async isLoginButtonDisplayed(): Promise<boolean> {
        return this.loginButton.isVisible();
    }

    public async fillEmailField(email: string): Promise<void> {
        await this.emailField.fill(email);
    }

    public async fillPasswordField(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    public async pressLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}
