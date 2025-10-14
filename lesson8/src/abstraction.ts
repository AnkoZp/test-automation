export abstract class BaseEntity {
    public abstract describe(): string;
}

export class ProductEntity extends BaseEntity {
    private id: number;
    private title: string;

    public constructor(id: number, title: string) {
        super();
        this.id = id;
        this.title = title;
    }

    public describe(): string {
        return `ProductEntity: ${this.id} — ${this.title}`;
    }
}

export class WithSummary {
    private entity: BaseEntity;
    private summary: string;

    public constructor(entity: BaseEntity, summary: string) {
        this.entity = entity;
        this.summary = summary;
    }

    public show(): void {
        console.log(this.entity.describe());
        console.log('Summary:', this.summary);
    }
}
