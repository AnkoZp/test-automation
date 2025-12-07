import { BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom-world.world';
import { chromium, Page } from '@playwright/test';

BeforeAll(async function () {
    console.log('BeforeAll: Setting up test suite...');
    CustomWorld.browser = await chromium.launch({
        headless: false
    });
});

Before(async function (this: CustomWorld) {
    console.log('Before: Setting up scenario...');
    if (!CustomWorld.browser) {
        throw new Error('Browser is not initialized. Ensure BeforeAll hook has run.');
    }
    this.context = await CustomWorld.browser.newContext({
        viewport: { width: 1200, height: 800 }
    });
    this.page = await this.context.newPage() as Page;
    this.page.setDefaultTimeout(30000);
    this.resetPageObjects();
});

After(async function (this: CustomWorld) {
    console.log('After: Cleaning up scenario...');
    await this.page.close();
    await this.context.close();
});

AfterAll(async function () {
    console.log('AfterAll: Cleaning up test suite...');
    if (CustomWorld.browser) {
        await CustomWorld.browser.close();
    }
});

