import { ICarData } from '../types';

export const carData: ICarData = {
  info: {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2018,
    mileage: 60000,
    sizeTank: 50,
    startFuel: 20,
    startDate: '2023-02-04T18:00',
    cost: 45000,
  },
  indicators: {
    curMileage: 60000,
    spendMoneyTotal: 0,
    spendFuelTotal: 0,
    curConsumptionFuel: '--:--',
    totalConsumptionFuel: '--:--',
    myMileageTotal: 0,
    averageMileageDay: 0,
    costOneKM: 0,
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
