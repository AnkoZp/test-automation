import { BaseTransport } from './class-base-transport';

export class ElectricCar extends BaseTransport {
    private batteryLevel: number;

    public constructor(model: string, maxSpeed: number, batteryLevel: number) {
        super('Electric Car', model, maxSpeed);
        this.batteryLevel = batteryLevel;
    }

    public startEngine(): void {
        if (this.batteryLevel <= 0) {
            console.log(`${this.model}: no charge, can't start engine.`);
        } else {
            super.startEngine();
        }
    }

    public charge(): void {
        this.batteryLevel = 100;
        console.log(`${this.model}: charged to 100%.`);
    }

    public getInfo(): string {
        return `${super.getInfo()} Battery charge: ${this.batteryLevel}%.`;
    }
}
