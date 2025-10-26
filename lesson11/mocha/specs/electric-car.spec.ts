import { expect } from 'chai';
import { after, describe, before, beforeEach, it} from 'mocha';
import { ElectricCar } from '../src/classes/class-electrical-car';


describe('ElectricCar class tests', () => {
    let tesla: ElectricCar;

    before(() => {
        console.log(`before globalThis.minChargee = ${globalThis.minCharge}`);
        globalThis.minCharge = 20;
    });

    beforeEach(() => {
        tesla = new ElectricCar('Tesla Model 3', 220, 50);
    });

    after(() => {
        console.log(`after globalThis.minChargee = ${globalThis.minCharge}`);
        globalThis.minCharge = undefined;
    });

    it('the object is initialized correctly', () => {
        expect(tesla.model).to.equal('Tesla Model 3');
        expect(tesla.maxSpeed).to.equal(220);
        expect(tesla.batteryLevel).to.equal(50);
    });

    it('must be charged to 100%?', () => {
        if (tesla.batteryLevel < globalThis.minCharge!) {
            tesla.charge();
            expect(tesla.batteryLevel).to.equal(100);
        } else {
            console.log(`Skipping charge test, battery level is above minChargee (${globalThis.minCharge})`);
        }
    });

    it('should discharge, but not below 0%', () => {
        tesla.discharge(30);
        console.log(`globalThis.minChargee = ${globalThis.minCharge}`);
        expect(tesla.batteryLevel).to.equal(globalThis.minCharge);
        tesla.discharge(100);
        expect(tesla.batteryLevel).to.equal(0);
    });

    it('the getInfo method must return correct information', () => {
        const info = tesla.getInfo();
        expect(info).to.include('Tesla Model 3');
        expect(info).to.include('Electric car');
        expect(info).to.include('220');
    });
});
