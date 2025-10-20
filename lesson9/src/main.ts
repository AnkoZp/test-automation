import { Transport } from './abstraction/interfaces';
import { Car } from './classes/class-car';
import { ElectricCar } from './classes/class-electrical-car';
import { Airplane } from './classes/class-airplane';

function operateTransport(vehicle: Transport): void {
    console.log(vehicle.getInfo());
    vehicle.startEngine();
    vehicle.setSpeed(100);
    vehicle.gainingInSpeed(50);
    vehicle.stopEngine();
    console.log('---------------');
}

const bmw = new Car('BMW M3', 250);
const tesla = new ElectricCar('Tesla Model S', 220, 80);
const boeing = new Airplane('Boeing 737', 900);

operateTransport(bmw);
operateTransport(tesla);

console.log('Actions with airplanes:');
boeing.startEngine();
boeing.setSpeed(300);
(boeing as Airplane).takeOff();
boeing.gainingInSpeed(200);
(boeing as Airplane).land();
boeing.stopEngine();
console.log(boeing.getInfo());
