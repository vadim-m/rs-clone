import { ICarData } from '../types';

// в каждой добавлении события при создании события
export function lastEvent(event: string, carData: ICarData) {
  const eventDateDOM = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
  const eventMileageDOM = +(document.querySelector(`.${event}__input_mileage`) as HTMLInputElement).value;
  const eventSpendMoney = +(document.querySelector(`.${event}__input_total`) as HTMLInputElement).value;
  const eventObj = {
    date: eventDateDOM,
    mileage: eventMileageDOM,
    spendMoney: eventSpendMoney,
  };
  if (event === 'refuel') {
    const eventSpendFuel = +(document.querySelector(`.${event}__input_amount-fuel`) as HTMLInputElement).value;
    const refuelObj = {
      date: eventDateDOM,
      mileage: eventMileageDOM,
      spendMoney: eventSpendMoney,
      spendFuel: eventSpendFuel,
    };
    if (!carData.eventTime) {
      const eventTime = {
        firstEvent: eventObj,
        lastEvent: eventObj,
        firstRefuel: refuelObj,
        lastRefuel: refuelObj,
      };
      carData['eventTime'] = eventTime;
      console.log(carData['eventTime']);
    } else {
      if (!carData.eventTime.firstRefuel) {
        carData.eventTime['firstRefuel'] = refuelObj;
        carData.eventTime['lastRefuel'] = refuelObj;
        carData.eventTime['lastEvent'] = eventObj;
      }
      carData.eventTime['lastRefuel'] = refuelObj;
      carData.eventTime['lastEvent'] = eventObj;
    }
  } else {
    if (!carData.eventTime) {
      const eventTime = {
        firstEvent: eventObj,
        lastEvent: eventObj,
        firstRefuel: undefined,
        lastRefuel: undefined,
      };
      carData['eventTime'] = eventTime;
    } else {
      carData.eventTime['lastEvent'] = eventObj;
    }
  }
}

// для подсчета в других функциях  - разница между периодами в днях
function diffDates(dateOne: string, dateTwoLess: string) {
  const result = (+new Date(dateOne) - +new Date(dateTwoLess)) / (60 * 60 * 24 * 1000);
  console.log(result);
  return result;
}
// для подсчета в других функциях - всего дней ведение записей
export function dayTotal(carData: ICarData) {
  const startDate = carData.info.startDate;
  const lastEventDate = carData.eventTime?.lastEvent.date as string;
  return diffDates(lastEventDate, startDate);
}
// при входе на страницу в конструктор с ифом на наличие настройки( в локалке должен быть ключ тру)
export function culcMaybeMileage(event: string, carData: ICarData) {
  if (!carData.eventTime) return carData.info.mileage;
  const curDate = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
  const lastEventDate = carData.eventTime.lastEvent.date;
  const maybeMileage = getAverageMileageDay(carData) * diffDates(curDate, lastEventDate);
  return maybeMileage;
}

//в CarDate

// средний пробег в день
function getAverageMileageDay(carData: ICarData): number {
  const averageMileageDay = +(calcMyMileageTotal(carData) / dayTotal(carData)).toFixed(2);
  return averageMileageDay;
}

// стоимость одного киллометра
export function culcCostOneKM(carData: ICarData): number {
  const costOneKM = +(carData.indicators.spendMoneyTotal / carData.indicators.myMileageTotal).toFixed(2);
  return costOneKM;
}
// пройдено пути владельцем
function calcMyMileageTotal(carData: ICarData): number {
  const startMileage = carData.info.mileage;
  const lasteEventMileage = carData.eventTime?.lastEvent.mileage as number;
  const myMileageTotal = lasteEventMileage - startMileage;
  return myMileageTotal;
}
//  общие затраты денег выполняется после ЛАСТЭВЕНТ
export function culcSpendMoneyTotal(event: string, carData: ICarData): number {
  const previosMoneyTotal = carData.indicators.spendMoneyTotal;
  const spendMoneyTotal = +(
    previosMoneyTotal + +(document.querySelector(`.${event}__input_total`) as HTMLInputElement).value
  ).toFixed(2);
  return spendMoneyTotal;
}
//  общие затраты топлива выполняется после ЛАСТЭВЕНТ
export function culcSpendFuelTotal(event: string, carData: ICarData): number {
  const previosFuelTotal = carData.indicators.spendFuelTotal;
  const spendFuelTotal = +(
    previosFuelTotal + +(document.querySelector(`.${event}__input_amount-fuel`) as HTMLInputElement).value
  ).toFixed(2);
  return spendFuelTotal;
}
export function updateIndicatirs(curEvent: string, carData: ICarData) {
  if (curEvent === 'refuel') {
    carData.indicators.spendFuelTotal = culcSpendFuelTotal(curEvent, carData);
  }

  carData.indicators.curMileage = carData.eventTime?.lastEvent.mileage as number;
  carData.indicators.myMileageTotal = calcMyMileageTotal(carData);
  carData.indicators.averageMileageDay = getAverageMileageDay(carData);
  carData.indicators.spendMoneyTotal = culcSpendMoneyTotal(curEvent, carData);
  carData.indicators.costOneKM = culcCostOneKM(carData);
}
