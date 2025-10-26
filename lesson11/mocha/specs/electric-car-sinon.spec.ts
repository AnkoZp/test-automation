import { expect } from 'chai';
import sinon from 'sinon';
import { ElectricCar } from '../src/classes/class-electrical-car';

// Mock helper object
const mockCharger = {
    plugIn: () => console.log('Charging started...'),
    plugOut: () => console.log('Charging finished.')
};

describe('ElectricCar class', () => {
    let car: ElectricCar;

    beforeEach(() => {
        car = new ElectricCar('Tesla Model 3', 200, 50);
    });

    it('should charge battery to 100%', () => {
        car.charge();
        expect(car.batteryLevel).to.equal(100);
    });

    it('should discharge battery correctly', () => {
        car.discharge(20);
        expect(car.batteryLevel).to.equal(30);
    });

    it('should log message when charging', () => {
        const logSpy = sinon.spy(console, 'log');
        car.charge();
        expect(logSpy.calledWithMatch('charged to 100%')).to.be.true;
        logSpy.restore();
    });

    it('should call mock charger plugIn once', () => {
        const stub = sinon.stub(mockCharger, 'plugIn').callsFake(() => {
            console.log('mock plug-in called');
        });

        mockCharger.plugIn();
        expect(stub.calledOnce).to.be.true;

        stub.restore();
    });

    it('should not start engine if battery is empty', () => {
        const consoleSpy = sinon.spy(console, 'log');
        car.discharge(100);
        car.startEngine();
        expect(consoleSpy.calledWithMatch('can not start engine')).to.be.true;
        consoleSpy.restore();
    });
});
