import { Car } from '../car/car';
import { Service } from '../event/service';

export class App {
  car: Car;
  service: Service;

  constructor() {
    this.car = new Car();
    this.service = new Service();
  }
}
