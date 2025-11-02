import { BaseTransport } from './class-base-transport';
import { iFlyable } from '../abstraction/i-flyable';

export class Airplane extends BaseTransport implements iFlyable {
    private altitude: number;

    public constructor(model: string, maxSpeed: number) {
        super('Airplane', model, maxSpeed);
        this.altitude = 0;
    }

    public getAltitude(): number {
        return this.altitude;
    }

    public takeOff(): void {
        if (!this.engineRunning) {
            console.log(`${this.model}: engine off, impossible to take off.`);
            return;
        }
        this.altitude = 1000;
        console.log(`${this.model}: takeoff completed, altitude ${this.altitude} m.`);
    }

    public land(): void {
        if (this.altitude === 0) {
            console.log(`${this.model}: already on the ground.`);
        } else {
            this.altitude = 0;
            this.currentSpeed = 0;
            console.log(`${this.model}: landing completed.`);
        }
    }

    public getInfo(): string {
        return `${super.getInfo()} Current altitude: ${this.altitude} m.`;
    }
}
