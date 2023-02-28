import { ICarData, IInfo, ICar, IToDo, ISettingsMyCar } from '../types';
import { getCar, getTodos, getRefuels, getReminders, getServices, getOthers } from './api';
import { carData as defaultCar } from '../car/car_data';

// заполняем LS данными из базы данных
export async function setCarDataFromDB() {
  defaultCar.info = await fillCarInfo();
  defaultCar.event.refuel = await (await getRefuels()).json();
  defaultCar.event.reminders = await (await getReminders()).json();
  defaultCar.event.service = await (await getServices()).json();
  defaultCar.event.others = await (await getOthers()).json();
  defaultCar.todos = await (await getTodos()).json();

  localStorage.setItem('car', JSON.stringify(defaultCar));
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
