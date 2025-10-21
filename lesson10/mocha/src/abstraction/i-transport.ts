export interface ITransport {
    type: string;
    model: string;
    maxSpeed: number;
    startEngine(): void;
    stopEngine(): void;
    setSpeed(speed: number): void;
    gainingInSpeed(speed: number): void;
    getInfo(): string;
}
