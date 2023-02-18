interface ICarData {
  info: IInfo;
  indicators: IIndicators;
  eventTime: IEventTime | undefined; // новое поле
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

interface IRefuel {
  date: string;
  mileage: number;
  priceFuel: number;
  amountFuel: number;
  amountPrice: number;
  totalSpendFuel: number; // новое поле
  isFull: boolean;
  place: string;
  notes: string;
  id: string;
}

interface IIndicators {
  curMileage: number;
  spendMoneyTotal: number; // изменил название
  spendFuelTotal: number; // изменил название
  curConsumptionFuel: number | string;
  totalConsumptionFuel: number | string; // новое поле
  myMileageTotal: number; // новое поле
  averageMileageDay: number; // новое поле
  costOneKM: number; // новое поле
}
// новый интерфейс
interface IEventTime {
  lastEvent: ISinpleEvent;
  lastRefuel: ISinpleRefuel | undefined;
  firstEvent: ISinpleEvent;
  firstRefuel: ISinpleRefuel | undefined;
}

interface ISinpleEvent {
  date: string;
  mileage: number;
  spendMoney: number;
}

interface ISinpleRefuel {
  date: string;
  mileage: number;
  spendMoney: number;
  spendFuel: number;
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
  previosDate: string;
  previosMileage: number;
  rememberOnMilege: number;
  rememberAfterMilege: number;
  rememberOnDate: string;
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
interface IParamsLineOfEvent {
  idAndClass: string;
  textTitle: string;
  icon: string;
  typeInput: string;
  size: string;
  required: boolean;
  option?: string;
  units?: string;
  value?: string;
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
};
