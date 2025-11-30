import { Locator, Page } from '@playwright/test';

export class BaseModalComponent {
    protected readonly baseLocator: Locator;

    private get title(): Locator {
        return this.baseLocator.locator('form h1');
    }

    private get closeButton(): Locator {
        return this.baseLocator.locator('button.close');
    }

    public constructor(page: Page) {
        this.baseLocator = page.locator('.modal-dialog');
    }

    public async getTitle(): Promise<string> {
        return await this.title.textContent() as string;
    }

    public async close(): Promise<void> {
        await this.closeButton.click();
    }
}
