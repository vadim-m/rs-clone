interface ICarData {
  info: IInfo;
  indicators: IIndicators;
  event: {
    refuel: IRefuel[];
    service: IService[];
    others: IOther[];
    reminders: IReminders[];
  };
}
interface IInfo {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  sizeTank: number;
  fuelInTank: number;
  cost: number;
}
interface IIndicators {
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
}
interface IRefuel {
  date: string;
  mileage: number;
  priceFuel: string;
  amountFuel: string;
  amountPrice: string;
  isFull: boolean;
  place: string;
  notes: string;
  id: string;
}

interface IService {
  date: string;
  mileage: number;
  type: string;
  name: string;
  detals: IDetals[];
  amount: number;
  place: string;
  notes: string;
  id: string;
}
interface IDetals {
  detals: {
    name: string;
    partNumber: string;
    manufacturer: string;
    price: number;
    quantity: number;
    amount: number;
  };
}

interface IOther {
  date: string;
  mileage: number;
  name: string;
  totalPrice: number;
  place: string;
  notes: string;
  id: string;
}

interface IReminders {
  type: string;
  name: number;
  previosDate: Date;
  previosMileage: number;
  rememberOnMilege: number;
  rememberAfterMilege: number;
  rememberOnDate: Date;
  rememberAfteDate: string;
  repeatTime: string;
  repeatMileage: number;
  notes: string;
  id: string;
}

interface Iicon {
  gear: string;
  pen: string;
  gasPump: string;
  wallet: string;
  cost: string;
  date: string;
  mileage: string;
  place: string;
  comments: string;
  plus: string;
  wrench: string;
  category: string;
  repeat: string;
  coins: string;
  quantFuel: string;
}

enum unitsEnum {
  money = 'money',
  distance = 'distance',
  speed = 'speed',
}

interface Imoney {
  RU: string;
  BY: string;
  EN: string;
  EU: string;
}

enum moneyEnum {
  RU = 'RU',
  BY = 'BY',
  EN = 'EN',
  EU = 'EU',
}

export { ICarData, IRefuel, IOther, IReminders, IService, IDetals, Iicon, unitsEnum, Imoney, moneyEnum };
