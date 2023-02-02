import { Car } from '../car/car';

export class App {
  car: Car;

  constructor() {
    this.car = new Car();
  }
}
