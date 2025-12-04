import { BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from '../../cucumber.config';

BeforeAll(function () {
    console.log('BeforeAll: Setting up test suite...');
});

Before(async function (this: CustomWorld) {
    console.log('Before: Setting up scenario...');
    this.resetPageObjects();
    await this.init();
});

After(async function (this: CustomWorld) {
    console.log('After: Cleaning up scenario...');
    if (this.browser) {
        await this.close();
    }
    this.resetPageObjects();
});

AfterAll(function () {
    console.log('AfterAll: Cleaning up test suite...');
});

