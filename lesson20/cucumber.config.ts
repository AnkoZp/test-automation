import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

setDefaultTimeout(60 * 1000); // 60 seconds

export class CustomWorld {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

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
}

setWorldConstructor(CustomWorld);
