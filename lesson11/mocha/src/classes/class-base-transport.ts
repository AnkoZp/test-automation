import { ITransport } from '../abstraction/i-transport';

export abstract class BaseTransport implements ITransport {
    public type: string;
    public model: string;
    public maxSpeed: number;
    protected currentSpeed: number;
    protected engineRunning: boolean;

    public constructor(type: string, model: string, maxSpeed: number) {
        this.type = type;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
        this.engineRunning = false;
    }

    public startEngine(): void {
        if (this.engineRunning) {
            console.log(`${this.model}: the engine is already running.`);
        } else {
            this.engineRunning = true;
            console.log(`${this.model}: engine started.`);
        }
    }

    public stopEngine(): void {
        if (!this.engineRunning) {
            console.log(`${this.model}: the engine is already turned off.`);
        } else {
            this.engineRunning = false;
            this.currentSpeed = 0;
            console.log(`${this.model}: engine off.`);
        }
    }

    public setSpeed(speed: number): void {
        if (!this.engineRunning) {
            console.log(`${this.model}: cannot change speed - engine is off.`);
            return;
        }
        if (speed > this.maxSpeed) {
            console.log(`${this.model}: exceeding the maximum speed!`);
        } else {
            this.currentSpeed = speed;
            console.log(`${this.model}: speed is set to ${this.currentSpeed} km/hour.`);
        }
    }

    public gainingInSpeed(speed: number): void {
        if (!this.engineRunning) {
            console.log(`${this.model}: The engine is not running, you cannot accelerate.`);
            return;
        }
        const newSpeed = this.currentSpeed + speed;
        if (newSpeed > this.maxSpeed) {
            console.log(`${this.model}: maximum speed reached ${this.maxSpeed} km/hour.`);
            this.currentSpeed = this.maxSpeed;
        } else {
            this.currentSpeed = newSpeed;
            console.log(`${this.model}: speed increased to ${this.currentSpeed} km/hour.`);
        }
    }

    public getInfo(): string {
        return `${this.type} ${this.model}: Max speed: ${this.maxSpeed} km/hour. Current speed — ${this.currentSpeed} km/hour.`;
    }
}
