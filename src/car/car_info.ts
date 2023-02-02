import { Indicators } from '../types';

export const carInfo: Indicators = {
  curMileage: 10000,
  curSpendMoney: 4500, // нужно подумать писать тут с последней заправкой или без
  curSpendFuel: 420, // нужно подумать писать тут с последней заправкой или без
  previousRefuel: {
    mileage: 9650,
    spendMoney: 100,
    spendFuel: 40,
  },
  lastFullTank: {
    mileage: 9000,
    spendFuel: 300,
  },
  startIndicators: {
    mileaga: 3000,
    fuelTank: 20,
    costCar: 45000,
  },
};
