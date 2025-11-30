import { Locator, Page, expect} from '@playwright/test';
import { BaseModalComponent } from './base-modal.component';

export class CartModalComponent extends BaseModalComponent {

    private readonly cartTotal: Locator;
    private readonly cartItems: Locator;

    public constructor(page: Page) {
        super(page);

        this.cartTotal = this.baseLocator.locator('//div[@id="cart_order_total"]/b');
        this.cartItems = this.baseLocator.locator('//div[contains(@class,"row cartContent_body product")]');
    }

    public async expectCartDisplayed(): Promise<void> {
        await expect(this.baseLocator).toBeVisible();
    }

    public async expectCartTotalDisplayed(): Promise<void> {
        await expect(this.cartTotal).toBeVisible();
    }

    public async getCartItemsTitles(): Promise<string[]> {
        await this.baseLocator.waitFor({ state: 'visible', timeout: 10000 });
        const itemsTitles: string[] = [];
        const items = await this.cartItems.all();
        for (const item of items) {
            const titleLocator = item.locator('//div[contains(@class,"product_name")]/a').first();
            const title = await titleLocator.textContent();
            if (title) {
                itemsTitles.push(title.trim());
            }
        }
        return itemsTitles;
    }

    public async getCartTotal(): Promise<string> {
        return (await this.cartTotal.textContent()) as string;
    }
}

