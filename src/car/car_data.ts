import { ICarData } from '../types';

export const carData: ICarData = {
  info: {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2018,
    mileage: 60000,
    sizeTank: 50,
    fuelInTank: 20,
    startDate: '2022-03-04T18:00',
    cost: 45000,
  },
  indicators: {
    curMileage: 98000,
    spendMoneyTotal: 4500,
    spendFuelTotal: 420,
    curConsumptionFuel: 8,
    totalConsumptionFuel: 8.5,
    myMileageTotal: 29000,
    averageMileageDay: 56,
    costOneKM: 0.25,
  },
  eventTime: undefined,
  event: {
    refuel: [],
    service: [],
    others: [],
    reminders: [],
  },
};

// новый интерфейс
// interface IEventTime {
//   lastEvent: {
//     date: string;
//     mileage: number;
//     spendMoney: number;
//   };
//   lastRefuel: {
//     date: string;
//     mileage: number;
//     spendMoney: number;
//     spendFuel: number;
//   };
//   firstEvent: {
//     date: string;
//     mileage: number;
//   };
//   firstRefuel: {
//     date: string;
//     mileage: number;
//   };
// }
