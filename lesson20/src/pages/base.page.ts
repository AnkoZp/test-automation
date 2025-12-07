import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;
    protected readonly baseUrl?: string;

    public constructor(page: Page, baseUrl?: string) {
        this.page = page;
        this.baseUrl = baseUrl;
    }

    public async open(pathOrUrl: string): Promise<void> {
        const url = this.baseUrl && !/^https?:\/\//i.test(pathOrUrl)
            ? new URL(pathOrUrl, this.baseUrl).toString()
            : pathOrUrl;
        await this.page.goto(url);
    }

    public async getPageTitle(): Promise<string> {
        return this.page.title();
    }

    public async getPageURL(): Promise<string> {
        return await this.page.url();
    }

    public async waitForTimeout(timeMs: number): Promise<void> {
        await this.page.waitForTimeout(timeMs);
    }
}
