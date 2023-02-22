interface ICarData {
  info: IInfo;
  indicators: IIndicators;
  event: {
    fill: IFill[];
    service: IService[];
    others: IOther[];
    plans: IPlans[];
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
interface IFill {
  date: string;
  mileage: number;
  costFuel: number;
  amountFuel: number;
  isFull: boolean;
  isLostRefuel: boolean;
  fuelInTank?: number;
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
  name: number;
  amount: number;
  place: string;
  notes: string;
  id: string;
}

interface IPlans {
  category: IService | IOther;
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

interface IUser {
  email: string;
  password: string;
  fullName?: string;
}

interface ICar {
  _id?: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  mileage: string;
  sizeTank: string;
  engineDisplacement?: string;
  enginePower?: string;
}

export { ICarData, IFill, IOther, IPlans, IService, IDetals, Iicon, unitsEnum, Imoney, moneyEnum, IUser, ICar };
