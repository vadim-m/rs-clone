import { ICarData, IOther, IRefuel, IService } from '../types';

// для подсчета в других функциях  - разница между периодами в днях
function diffDates(dateOne: string, dateTwoLess: string) {
  const result = (+new Date(dateOne) - +new Date(dateTwoLess)) / (60 * 60 * 24 * 1000);
  console.log(result);
  return result;
}

function lastEvent(carData: ICarData) {
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
  const firstEvent = [...carData.event.refuel, ...carData.event.service, ...carData.event.others][0];
  const startDate = diffDates(carData.info.startDate, firstEvent.date) < 0 ? carData.info.startDate : firstEvent.date;
  const lastEventDate = (lastEvent(carData) as IRefuel | IService | IOther).date;
  console.log(lastEventDate);
  return diffDates(lastEventDate, startDate);
}
// при входе на страницу в конструктор с ифом на наличие настройки( в локалке должен быть ключ тру)
export function culcMaybeMileage(event: string, carData: ICarData): string {
  const curDate = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
  const lastEventDate = (lastEvent(carData) as IRefuel | IService | IOther).date;
  const maybeMileage = +getAverageMileageDay(carData) * diffDates(curDate, lastEventDate);
  return String(maybeMileage);
}

//в CarDate

// пройдено пути владельцем
export function calcMyMileageTotal(carData: ICarData): string {
  const firstEvent = [...carData.event.refuel, ...carData.event.service, ...carData.event.others][0];
  const startMileage =
    diffDates(carData.info.startDate, firstEvent.date) < 0 ? carData.info.mileage : firstEvent.mileage;
  const lasteEventMileage = (lastEvent(carData) as IRefuel | IService | IOther).mileage;
  const myMileageTotal = +lasteEventMileage - +startMileage;
  console.log(myMileageTotal);
  return String(myMileageTotal);
}

// средний пробег в день
function getAverageMileageDay(carData: ICarData): string {
  const averageMileageDay = (+calcMyMileageTotal(carData) / dayTotal(carData)).toFixed(2);
  console.log(dayTotal(carData));
  return averageMileageDay;
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
//  общие затраты топлива выполняется после добавления события
export function culcSpendFuelTotal(carData: ICarData): string {
  const allRefuels = carData.event.refuel;
  const spendFuelTotal = allRefuels
    .reduce((acc, e) => {
      return acc + +e.amountFuel;
    }, 0)
    .toFixed(2);
  console.log(allRefuels);
  return String(spendFuelTotal);
}
export function culcConsumption(carData: ICarData) {
  const allEventRefuel = carData.event.refuel;
  console.log(allEventRefuel);
  if (allEventRefuel.length > 1) {
    const curSpendFuel = carData.event.refuel[carData.event.refuel.length - 1].amountFuel;
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

export function updateIndicatirs(curEvent: string, carData: ICarData) {
  if (curEvent === 'refuel') {
    carData.indicators.spendFuelTotal = culcSpendFuelTotal(carData);
  }
  carData.indicators.curMileage = (lastEvent(carData) as IRefuel | IService | IOther).mileage;
  carData.indicators.myMileageTotal = calcMyMileageTotal(carData);
  carData.indicators.averageMileageDay = getAverageMileageDay(carData);
  carData.indicators.spendMoneyTotal = culcSpendMoneyTotal(carData);
  carData.indicators.costOneKM = culcCostOneKM(carData);
}

export function minMilaeage(curEvent: string, carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const curDate = (document.querySelector(`.${curEvent}__input_date`) as HTMLInputElement).value;

  const beforeDateEvents = allEvents.filter((e) => {
    return new Date(e.date) < new Date(curDate);
  });
  console.log(beforeDateEvents);
  const lastMileageBefore = beforeDateEvents[beforeDateEvents.length - 1]?.mileage ? beforeDateEvents[0].mileage : '';
  return lastMileageBefore;
}

export function maxMilaeage(curEvent: string, carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const curDate = (document.querySelector(`.${curEvent}__input_date`) as HTMLInputElement).value;

  const afterDateEvents = allEvents.filter((e) => {
    return new Date(e.date) > new Date(curDate);
  });
  const firstMileageAfter = afterDateEvents[0]?.mileage ? afterDateEvents[0].mileage : '';
  return firstMileageAfter;
}
