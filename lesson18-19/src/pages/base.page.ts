import { Page } from '@playwright/test';
import { CategoriesMenuComponents } from 'src/components/categories-menu.components';
import { CartModalComponent } from 'src/components/cart-modal.component';

export class BasePage {
    protected readonly page: Page;
    protected readonly baseUrl?: string;

    public constructor(page: Page, baseUrl?: string) {
        this.page = page;
        this.baseUrl = baseUrl;
        this.categoriesMenuComponents = new CategoriesMenuComponents(page);
        this.cartModalComponent = new CartModalComponent(page);
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

    public readonly categoriesMenuComponents: CategoriesMenuComponents;
    public readonly cartModalComponent: CartModalComponent;
}
