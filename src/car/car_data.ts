import { ICarData } from '../types';

export const carData: ICarData = {
  info: {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2018,
    mileage: 0,
    sizeTank: 50,
    startFuel: 20,
    startDate: '2023-02-04T18:00',
    cost: 45000,
    fuel: 'Бензин',
    hasCar: false,
  },
  indicators: {
    curMileage: '0',
    spendMoneyTotal: '0',
    spendFuelTotal: '0',
    curConsumptionFuel: '--:--',
    totalConsumptionFuel: '--:--',
    myMileageTotal: '0',
    averageMileageDay: '0',
    costOneKM: '0',
  },
  event: {
    refuel: [],
    service: [],
    others: [],
    reminders: [],
  },
  todos: [],
};
