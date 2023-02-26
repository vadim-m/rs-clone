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
  startFuel: number;
  startDate: string; // новое поле
  cost: number;
}

interface IIndicators {
  curMileage: string;
  spendMoneyTotal: string;
  spendFuelTotal: string;
  curConsumptionFuel: string;
  totalConsumptionFuel: string;
  myMileageTotal: string;
  averageMileageDay: string;
  costOneKM: string;
}

interface IRefuel {
  date: string;
  mileage: string;
  priceFuel: string;
  amountFuel: string;
  totalPrice: string;
  totalSpendFuel: string;
  isFull: boolean;
  place: string;
  notes: string;
  id: string;
}

interface IService {
  date: string;
  mileage: string;
  type: string;
  name: string;
  detals: IDetals[];
  totalPrice: string;
  place: string;
  notes: string;
  id: string;
}
interface IDetals {
  detals: {
    name: string;
    partNumber: string;
    manufacturer: string;
    price: string;
    quantity: string;
    amount: string;
  };
}

interface IOther {
  date: string;
  mileage: string;
  name: string;
  totalPrice: string;
  place: string;
  notes: string;
  id: string;
}

interface IReminders {
  type: string;
  name: string;
  previosDate: string;
  previosMileage: string;
  rememberOnMilege: string;
  rememberAfterMilege: string;
  rememberOnDate: string;
  rememberAfteDate: string;
  repeatTime: string;
  repeatMileage: string;
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
interface IParamsLineOfEvent {
  idAndClass: string;
  textTitle: string;
  icon: string;
  typeInput: string;
  size: string;
  required: boolean;
  min?: number;
  max?: number;
  option?: string;
  units?: string;
  value?: string;
}
interface ISettingsMyCar {
  language: string;
  currency: string;
  rememberPriceFuel: boolean;
  predictMileage: boolean;
  darkTheme: boolean;
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

interface ISettings {
  _id?: string;
  language: string;
  currency: string;
  mode: boolean;
  orientation: boolean;
  mileage: boolean;
  price: boolean;
}

export {
  ICarData,
  IRefuel,
  IOther,
  IReminders,
  IService,
  IDetals,
  Iicon,
  unitsEnum,
  Imoney,
  moneyEnum,
  IParamsLineOfEvent,
  IUser,
  ICar,
  ISettingsMyCar,
  ISettings,
};
