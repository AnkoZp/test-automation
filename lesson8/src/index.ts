import { fetchProducts } from './interfaces';
import { ProductSummary } from './transformer';
import { ProductEntity, WithSummary } from './abstraction';

async function main(): Promise<void> {
    try {
        const products = await fetchProducts();
        console.log('Fetched products count:', products.length);

        const prod = products[0];
        console.log('First product:', prod);

        const cheapestProd = products.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
        console.log('Cheapest product:', cheapestProd);

        const summary = new ProductSummary(prod);
        console.log('Product summary:', summary.getInfo());

        const entity = new ProductEntity(prod.id, prod.title);
        const wrapper = new WithSummary(entity, summary.getInfo());
        wrapper.show();

    } catch (err) {
        console.error('Error:', err);
    }
}

main();
