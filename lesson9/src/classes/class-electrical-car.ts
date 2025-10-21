import { Car } from './class-car';
import { IRechargeable } from '../abstraction/i-rechargeable';

export class ElectricCar extends Car implements IRechargeable {
    private _batteryLevel: number;

    public constructor(model: string, maxSpeed: number, batteryLevel: number) {
        super(model, maxSpeed);
        this.type = 'Electric Car';
        this._batteryLevel = batteryLevel;
    }

    public get batteryLevel(): number {
        return this._batteryLevel;
    }

    public charge(): void {
        this._batteryLevel = 100;
        console.log(`${this.model}: charged to 100%.`);
    }

    public discharge(amount: number): void {
        this._batteryLevel -= amount;
        if (this.batteryLevel < 0) this._batteryLevel = 0;
        console.log(`${this.model}: battery is discharged to ${this._batteryLevel}%.`);
    }

    public startEngine(): void {
        if (this._batteryLevel <= 0) {
            console.log(`${this.model}: no charge, can't start engine.`);
        } else {
            super.startEngine();
        }
    }

    public getInfo(): string {
        return `${super.getInfo()} Battery charge: ${this._batteryLevel}%.`;
    }
}
