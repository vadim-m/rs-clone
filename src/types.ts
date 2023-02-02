export interface Indicators {
  curMileage: number;
  curSpendMoney: number;
  curSpendFuel: number;
  previousRefuel: {
    mileage: number;
    spendMoney: number;
    spendFuel: number;
  };
  lastFullTank: {
    mileage: number;
    spendFuel: number;
  };
  startIndicators: {
    mileaga: number;
    fuelTank: number;
    costCar: number;
  };
};
