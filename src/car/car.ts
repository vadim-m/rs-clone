import { carData } from './car_data';

export class Car {
  constructor() {
    this.costOneKm();
  }

  costOneKm() {
    return (
      (carData.indicators.curSpendMoney - carData.indicators.previousRefuel.spendMoney) / carData.indicators.curMileage
    );
  }

  consumptionAll() {
    return (
      (carData.indicators.curSpendFuel - carData.indicators.previousRefuel.spendFuel - carData.info.fuelInTank) /
      ((carData.indicators.curMileage - carData.info.mileage) * 100)
    );
  }

  consumptionCurrent() {
    return (
      (carData.indicators.curSpendFuel - carData.indicators.lastFullTank.spendFuel) /
      ((carData.indicators.curMileage - carData.indicators.lastFullTank.spendFuel) * 100)
    );
  }
}
