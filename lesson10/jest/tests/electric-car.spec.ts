import {beforeEach, describe, expect, it} from '@jest/globals';
import { ElectricCar } from '../src/classes/class-electrical-car';
import { isFullyCharged, simulateTrip } from '../src/classes/class-electrical-car';


describe('ElectricCar class tests', () => {
    let tesla: ElectricCar;

    beforeEach(() => {
        tesla = new ElectricCar('Tesla Model 3', 220, 50);
    });

    it('the object is initialized correctly', () => {
        expect(tesla.model).toBe('Tesla Model 3');
        expect(tesla.maxSpeed).toBe(220);
        expect(tesla.batteryLevel).toBe(50);
    });

    it('must be charged to 100%', () => {
        tesla.charge();
        expect(tesla.batteryLevel).toBe(100);
    });

    it('isFullyCharged returns false, if the battery is not 100%', () => {
        expect(isFullyCharged(tesla)).toBe(false);
    });

    it('simulateTrip should reduce the charge', () => {
        const result = simulateTrip(tesla, 30);
        console.log(result.batteryLevel);
        expect(result.batteryLevel).toBe(20);
    });

    it('the getInfo method must return correct information', () => {
        const info = tesla.getInfo();
        expect(info).toContain('Tesla Model 3');
        expect(info).toContain('Electric car');
        expect(info).toContain('220');
    });
});
