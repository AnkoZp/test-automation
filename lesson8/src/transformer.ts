import { Product } from './interfaces';

export class ProductSummary {
    public id: number;
    public title: string;
    public price: number;
    public shortDesc: string;

    public constructor(product: Product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.shortDesc = product.description.length > 30
            ? product.description.slice(0, 30) + '...'
            : product.description;
    }

    public getInfo(): string {
        return `#${this.id} ${this.title} — $${this.price}. ${this.shortDesc}`;
    }
}
