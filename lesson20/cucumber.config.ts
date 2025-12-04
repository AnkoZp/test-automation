import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from './src/pages/login.page';
import { MainPage } from './src/pages/main.page';

setDefaultTimeout(60 * 1000); // 60 seconds

export class CustomWorld {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    private _loginPage?: LoginPage;
    private _mainPage?: MainPage;

    public resetPageObjects(): void {
        this._loginPage = undefined;
        this._mainPage = undefined;
    }

    public async init(): Promise<void> {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage() as Page;
    }

    public async close(): Promise<void> {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }

    public get loginPage(): LoginPage {
        if (!this.page) {
            throw new Error('Page is not initialized. Call init() before accessing page objects.');
        }
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    public get mainPage(): MainPage {
        if (!this.page) {
            throw new Error('Page is not initialized. Call init() before accessing page objects.');
        }
        if (!this._mainPage) {
            this._mainPage = new MainPage(this.page);
        }
        return this._mainPage;
    }
}

setWorldConstructor(CustomWorld);
