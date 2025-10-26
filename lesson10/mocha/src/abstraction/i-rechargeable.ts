export interface IRechargeable {
    batteryLevel: number;
    charge(): void;
    discharge(amount: number): void;
}
