import { carInfo } from './car_info';

export class Car {
  constructor() {
    this.costOneKm();
  }

  costOneKm() {
    return (carInfo.curSpendMoney - carInfo.previousRefuel.spendMoney) / carInfo.curMileage;
  }

  consumptionAll() {
    return (
      (carInfo.curSpendFuel - carInfo.previousRefuel.spendFuel - carInfo.startIndicators.fuelTank) /
      ((carInfo.curMileage - carInfo.startIndicators.mileaga) * 100)
    );
  }

  consumptionCurrent() {
    return (
      (carInfo.curSpendFuel - carInfo.lastFullTank.spendFuel) /
      ((carInfo.curMileage - carInfo.lastFullTank.spendFuel) * 100)
    );
  }
}
