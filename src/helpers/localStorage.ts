import { ICarData, IInfo, ICar, IToDo, ISettingsMyCar, IRefuel, IService, IOther } from '../types';
import { getCar, getTodos, getRefuels, getReminders, getServices, getOthers } from './api';
import { carData as car } from '../car/car_data';
import {
  calcMyMileageTotal,
  culcConsumption,
  culcCostOneKM,
  culcSpendFuelTotal,
  culcSpendMoneyTotal,
  getAverageMileageDay,
  lastEvent,
} from '../utilits/mathSpend';

// заполняем LS данными из базы данных
export async function setCarDataFromDB() {
  car.info = await fillCarInfo();
  car.event.refuel = await (await getRefuels()).json();
  car.event.reminders = await (await getReminders()).json();
  car.event.service = await (await getServices()).json();
  car.event.others = await (await getOthers()).json();
  car.todos = await (await getTodos()).json();
  localStorage.setItem('car', JSON.stringify(car));
  const freshCar = getCarFromLS() as ICarData;

  if ([...freshCar.event.refuel, ...freshCar.event.service, ...freshCar.event.others].length > 0) {
    car.indicators.spendFuelTotal = culcSpendFuelTotal(freshCar);
    culcConsumption(freshCar);

    car.indicators.curMileage = (lastEvent(freshCar) as IRefuel | IService | IOther)?.mileage
      ? (lastEvent(freshCar) as IRefuel | IService | IOther).mileage
      : String(car.info.mileage);
    car.indicators.myMileageTotal = calcMyMileageTotal(freshCar);
    car.indicators.averageMileageDay = getAverageMileageDay(freshCar);
    car.indicators.spendMoneyTotal = culcSpendMoneyTotal(freshCar);
    car.indicators.costOneKM = culcCostOneKM(freshCar);

    localStorage.setItem('car', JSON.stringify(freshCar));
  }
  //! вот тут переделать индикаторы updateIndicators(car)
}

// получаем объект ICar, преобразуем его в IInfo для расчетов Сани
async function fillCarInfo() {
  const res = await getCar();
  const data: ICar = await res.json();
  const processedData: IInfo = {
    _id: data._id,
    brand: data.brand,
    model: data.model,
    year: +data.year,
    mileage: +data.mileage,
    sizeTank: +data.sizeTank,
    engineDisplacement: data.engineDisplacement,
    enginePower: data.enginePower,
    startFuel: 20,
    startDate: data.toString(),
    cost: 1000000,
  };

  return processedData;
}

// получить объект carData из LS
export function getCarFromLS(): ICarData | null {
  return JSON.parse(localStorage.getItem('car') as string) ?? null;
}

// получить объект carData.info из LS
export function getCarInfoFromLS(): IInfo | null {
  const car = getCarFromLS();
  return car?.info ? car.info : null;
}

// получить объект carData.info из LS
export function getCarTodosFromLS(): IToDo[] | [] {
  const car = getCarFromLS();
  return car?.todos ? car.todos : [];
}

// получить объект настроек settingsCar из LS
export function getAppSettingsFromLS(): ISettingsMyCar | null {
  return JSON.parse(localStorage.getItem('settingsCar') as string) ?? null;
}
