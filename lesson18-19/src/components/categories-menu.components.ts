import { Locator, Page, expect } from '@playwright/test';

export class CategoriesMenuComponents {
    private readonly categoriesContainer: Locator;

    public constructor(page: Page) {
        this.categoriesContainer = page.locator('//div[contains(@class,"categories_menu")]');
    }

    public async expectCategoriesMenuDisplayed(): Promise<void> {
        await expect(this.categoriesContainer).toBeVisible();
    }

    public async expectCategoryDisplayed(categoryName: string): Promise<void> {
        const categoryItem = await this.getCategoryByText(categoryName);
        await expect(categoryItem).toBeVisible();
    }

    public async clickCategory(categoryName: string): Promise<void> {
        const categoryItem = this.categoriesContainer.locator(`//a[contains(text(), "${categoryName}")]`);
        await categoryItem.click();
    }

    public async getCategoryByText(categoryName: string): Promise<Locator> {
        return await this.categoriesContainer.locator(`//li//a[contains(text(), "${categoryName}")]`);
    }
}
