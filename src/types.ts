interface ICarData {
  info: IInfo;
  indicators: IIndicators;
  todos: IToDo[];
  event: {
    refuel: IRefuel[];
    service: IService[];
    others: IOther[];
    reminders: IReminders[];
  };
}

export interface IInfo {
  _id?: string;
  brand: string;
  model: string;
  year: number;
  fuel?: string;
  hasCar?: false;
  mileage: number;
  sizeTank: number;
  engineDisplacement?: string;
  enginePower?: string;
  startFuel: number;
  startDate: string;
  cost: number;
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
  createdAt?: Date;
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
  rememberAfterDate: string;
  repeat: boolean;
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
  fullName?: string;
  hasCar?: boolean;
  language: string;
  currency: string;
  rememberPriceFuel?: boolean;
  predictMileage?: boolean;
  darkTheme?: boolean;
  orientation?: boolean;
}
interface IParamsOneReminder {
  class: string;
  textName: string;
  textType: string;
  reminderDefault: boolean;
  icon?: string;
  completeDate?: string;
  completeMileage?: string;
  button?: string;
  label?: string;
  id: string;
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

interface IShowPlans {
  myMaintenance: string;
  myPlans: string;
  allPlans: string;
}

interface IToDo {
  _id?: string;
  text?: string;
  progress: boolean;
}

// eslint-disable-next-line no-redeclare
interface IUser {
  email: string;
  password: string;
  fullName?: string;
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
  IParamsOneReminder,
  IShowPlans,
  IToDo,
};
