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
interface IEvent {
  date: string;
  mileage: string;
  totalPrice: string;
  typeEvent: string;
  name: string;
  type?: string;
  costWorks?: string;
  priceFuel?: string;
  amountFuel?: string;
  detals?: IDetals[];
  totalSpendFuel?: string;
  isFull?: boolean;
  place: string;
  notes: string;
  id: string;
}

interface IRefuel {
  _id?: string;
  date: string;
  mileage: string;
  name: string;
  priceFuel: string;
  amountFuel: string;
  totalPrice: string;
  totalSpendFuel: string;
  isFull: boolean;
  place: string;
  notes: string;
  id: string;
  typeEvent: string;
}

interface IService {
  _id?: string;
  date: string;
  mileage: string;
  type: string;
  name: string;
  detals?: IDetals[];
  totalPrice: string;
  costWorks?: string;
  place: string;
  notes: string;
  id: string;
  typeEvent: string;
}

interface IDetals {
  name: string;
  partNumber: string;
  manufacturer: string;
  price: string;
  quantity: string;
  amount: string;
}

interface IOther {
  _id?: string;
  date: string;
  mileage: string;
  name: string;
  totalPrice: string;
  place: string;
  notes: string;
  id: string;
  typeEvent: string;
}

interface IReminders {
  _id?: string;
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
  gasPumpYellow: string;
  wallet: string;
  walletBlue: string;
  cost: string;
  date: string;
  mileage: string;
  place: string;
  comments: string;
  plus: string;
  wrench: string;
  wrenchRed: string;
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

interface IParamsOneEvents {
  class: string;
  titleName: string;
  mileage: string;
  date: string;
  totalPrice: string;
  costWorks?: string;
  amountFuel?: string;
  titleType?: string;
  isFullTank?: boolean;
  priceFuel?: string;
  eventType: string;
  icon?: string;
  place: string;
  notes: string;
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
  IParamsOneEvents,
  IShowPlans,
  IToDo,
  IEvent,
};
