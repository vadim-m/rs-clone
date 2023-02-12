import { ICarData } from '../types';

export const carData: ICarData = {
  info: {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2018,
    mileage: 60000,
    sizeTank: 50,
    fuelInTank: 20,
    cost: 45000,
  },
  indicators: {
    curMileage: 10000,
    curSpendMoney: 4500,
    curSpendFuel: 420,
    previousRefuel: {
      mileage: 9650,
      spendMoney: 100,
      spendFuel: 40,
    },
    lastFullTank: {
      mileage: 9000,
      spendFuel: 300,
    },
  },
  event: {
    fill: [],
    service: [],
    others: [],
    reminders: [],
  },
};
