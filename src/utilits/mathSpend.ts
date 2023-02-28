import { getSettingsFromLocal } from './getCurrentSettings';
import { ICarData, IOther, IRefuel, IService } from '../types';

// для подсчета в других функциях  - разница между периодами в днях
export function diffDates(dateOne: string, dateTwoLess: string) {
  const result = (+new Date(dateOne) - +new Date(dateTwoLess)) / (60 * 60 * 24 * 1000);
  return result;
}
// последнее событие
export function lastEvent(carData: ICarData) {
  console.log(carData);
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  if (allEvents.length > 0) {
    const allEventsSort = allEvents.sort((a, b) => +new Date(a.date) - +new Date(b.date));
    const lastEvent = allEventsSort[allEventsSort.length - 1];
    return lastEvent;
  } else {
    return undefined; // не знаю, может нужно что-то другое возвращать
  }
}

// для подсчета в других функциях - всего дней ведение записей
export function dayTotal(carData: ICarData) {
  if (lastEvent(carData) === undefined) return 0;
  const firstEvent = [...carData.event.refuel, ...carData.event.service, ...carData.event.others][0];
  const startDate = diffDates(carData.info.startDate, firstEvent.date) < 0 ? carData.info.startDate : firstEvent.date;
  const lastEventDate = (lastEvent(carData) as IRefuel | IService | IOther).date;
  return diffDates(lastEventDate, startDate);
}
// при входе на страницу в конструктор с ифом на наличие настройки( в локалке должен быть ключ тру)
export function culcMaybeMileage(event: string, carData: ICarData) {
  if (getSettingsFromLocal()?.rememberPriceFuel) {
    if (lastEvent(carData) === undefined) return;
    const curDate = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
    const mileageDOM = document.querySelector(`.${event}__input_mileage`) as HTMLInputElement;
    const lastEventDate = (lastEvent(carData) as IRefuel | IService | IOther).date;
    const maybeMileage =
      +(lastEvent(carData) as IRefuel | IService | IOther).mileage +
      +getAverageMileageDay(carData) * diffDates(curDate, lastEventDate);
    mileageDOM.value = String(Number(maybeMileage).toFixed(0));
  }
}

//в CarDate

// пройдено пути владельцем
export function calcMyMileageTotal(carData: ICarData): string {
  if (lastEvent(carData) === undefined) return '0';
  const firstEvent = [...carData.event.refuel, ...carData.event.service, ...carData.event.others][0];
  const startMileage =
    diffDates(carData.info.startDate, firstEvent.date) < 0 ? carData.info.mileage : firstEvent.mileage;
  const lasteEventMileage = (lastEvent(carData) as IRefuel | IService | IOther).mileage;
  const myMileageTotal = +lasteEventMileage - +startMileage;
  return String(myMileageTotal);
}

// средний пробег в день
export function getAverageMileageDay(carData: ICarData): string {
  if (lastEvent(carData) === undefined) return '0';
  const averageMileageDay = (+calcMyMileageTotal(carData) / dayTotal(carData)).toFixed(2);
  return averageMileageDay;
}

// затраты в этом месяце
export function curSpendMonth(carData: ICarData): string {
  if (lastEvent(carData) === undefined) return '0';
  const myEventsArr = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const allEventMonth = myEventsArr.filter((e) => new Date(e.date).getMonth() === new Date().getMonth());
  const curSpendMonthMoney = allEventMonth.reduce((acc, e) => {
    return acc + +e.totalPrice;
  }, 0);
  return String(curSpendMonthMoney);
}

// стоимость одного киллометра поле добавления события
export function culcCostOneKM(carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const spendMoneyTotal = allEvents.reduce((acc, e) => {
    return acc + +e.totalPrice;
  }, 0);
  const costOneKM = (spendMoneyTotal / +calcMyMileageTotal(carData)).toFixed(2);
  return costOneKM;
}

//  общие затраты денег после добавления события
export function culcSpendMoneyTotal(carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const spendMoneyTotal = allEvents
    .reduce((acc, e) => {
      return acc + +e.totalPrice;
    }, 0)
    .toFixed(2);
  return String(spendMoneyTotal);
}
//  общие затраченное топлива выполняется после добавления события
export function culcSpendFuelTotal(carData: ICarData): string {
  if (carData.event.refuel.length > 0) {
    const allRefuels = carData.event.refuel;
    const spendFuelTotal = allRefuels
      .reduce((acc, e) => {
        return acc + +e.amountFuel;
      }, 0)
      .toFixed(2);
    return String(spendFuelTotal);
  } else return '0';
}
// расчет расхода топлива
export function culcConsumption(carData: ICarData) {
  const allEventRefuel = carData.event.refuel;
  if (allEventRefuel.length > 1) {
    const curSpendFuel = carData.event.refuel[carData.event.refuel.length - 1].amountFuel;
    console.log(curSpendFuel);

    const firstMileageOnFuel = +carData.event.refuel[0].mileage - carData.info.mileage;
    console.log(firstMileageOnFuel);
    const fullTankCheckArr = carData.event.refuel.filter((e) => e.isFull === true); // все заправки с полным баком
    const consumptionWithoutData = (
      (+culcSpendFuelTotal(carData) - +curSpendFuel) /
      ((+calcMyMileageTotal(carData) - +firstMileageOnFuel) / 100)
    ).toFixed(2);
    carData.indicators.totalConsumptionFuel = consumptionWithoutData;
    carData.indicators.curConsumptionFuel = consumptionWithoutData;
    if (fullTankCheckArr.length > 1) {
      const lastFullTankEvent = fullTankCheckArr.slice(-2)[0];
      const currentFullTankEvent = fullTankCheckArr.slice(-2)[1];
      const lastLostFuel = +currentFullTankEvent.totalSpendFuel - +lastFullTankEvent.totalSpendFuel;
      const lastRoute = +currentFullTankEvent.mileage - +lastFullTankEvent.mileage;
      carData.indicators.curConsumptionFuel = (lastLostFuel / (lastRoute / 100)).toFixed(2);
    }
    if (fullTankCheckArr.length === 1) {
      if (carData.info.sizeTank && carData.info.startFuel) {
        const allLostFuel = +culcSpendFuelTotal(carData) - (carData.info.sizeTank - carData.info.startFuel);
        carData.indicators.curConsumptionFuel = (allLostFuel / (+calcMyMileageTotal(carData) / 100)).toFixed(2);
      } else {
        carData.indicators.curConsumptionFuel = carData.indicators.totalConsumptionFuel;
      }
    }
  }
}
// обновление всех показателей
export function updateIndicatirs(curEvent: string, carData: ICarData) {
  if (curEvent === 'refuel') {
    carData.indicators.spendFuelTotal = culcSpendFuelTotal(carData);
    culcConsumption(carData);
    console.log(culcSpendFuelTotal(carData));
  }
  carData.indicators.curMileage = (lastEvent(carData) as IRefuel | IService | IOther).mileage;
  carData.indicators.myMileageTotal = calcMyMileageTotal(carData);
  carData.indicators.averageMileageDay = getAverageMileageDay(carData);
  carData.indicators.spendMoneyTotal = culcSpendMoneyTotal(carData);
  carData.indicators.costOneKM = culcCostOneKM(carData);
}
