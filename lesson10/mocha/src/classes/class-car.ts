import { BaseTransport } from './class-base-transport';

export class Car extends BaseTransport {
    public constructor(model: string, maxSpeed: number) {
        super('Car', model, maxSpeed);
    }
}
