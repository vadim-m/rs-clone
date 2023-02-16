import { carData } from '../car/car_data';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

//  в каждой добавлении события при создании события - общие затраты денег выполняется перед ЛАСТЭВЕНТ
export function culcSpendMoneyTotal(event: string) {
  const previosMoneyTotal = carData.eventTime?.lastEvent.spendMoney ? carData.eventTime.lastEvent.spendMoney : 0;
  carData.indicators.spendMoneyTotal =
    previosMoneyTotal + +(document.querySelector(`${event}__input_total`) as HTMLInputElement).value;
}
// в каждой добавлении события при создании события
export function lastEvent(event: string) {
  if (carData.eventTime?.firstEvent) {
    carData.eventTime.firstEvent.date = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
    carData.eventTime.firstEvent.mileage = +(document.querySelector(`.${event}__input_mileage`) as HTMLInputElement)
      .value;
  }
  if (carData.eventTime?.lastEvent) {
    carData.eventTime.lastEvent.date = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
    carData.eventTime.lastEvent.mileage = +(document.querySelector(`.${event}__input_mileage`) as HTMLInputElement)
      .value;
    carData.eventTime.lastEvent.spendMoney = +(document.querySelector(`.${event}__input_total`) as HTMLInputElement)
      .value;
  }
  if (event === 'refuel') {
    if (carData.eventTime?.firstRefuel) {
      carData.eventTime.firstRefuel.date = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
      carData.eventTime.firstRefuel.mileage = +(document.querySelector(`.${event}__input_mileage`) as HTMLInputElement)
        .value;
    }
    if (carData.eventTime?.lastRefuel) {
      carData.eventTime.lastRefuel.date = (document.querySelector(`.${event}__input_date`) as HTMLInputElement).value;
      carData.eventTime.lastRefuel.mileage = +(document.querySelector(`.${event}__input_mileage`) as HTMLInputElement)
        .value;
      carData.eventTime.lastRefuel.spendMoney = +(document.querySelector(`.${event}__input_total`) as HTMLInputElement)
        .value;
      carData.eventTime.lastRefuel.spendFuel = +(
        document.querySelector(`.${event}__input_amount-fuel`) as HTMLInputElement
      ).value;
    }
  }
}
//метод в заправке для подсчета всего затраченного топлива -

// для подсчета в других функциях  - разница между периодами в днях
function diffDates(dateOne: Date, dateTwoLess: Date) {
  console.log((+dateOne - +dateTwoLess) / (60 * 60 * 24 * 1000));
  return (+dateOne - +dateTwoLess) / (60 * 60 * 24 * 1000);
}
//в CarDate
function mileageTotal(): number {
  const startMileage = carData.info.mileage;
  const lasteEventMileage = carData.eventTime?.lastEvent.mileage
    ? carData.eventTime.lastEvent.mileage
    : carData.info.mileage;
  const myMileageTotal = lasteEventMileage - startMileage;
  return myMileageTotal;
}

// для подсчета в других функциях - всего дней ведение записей
export function dayTotal() {
  const startDate = new Date(carData.info.startDate);
  const lastEventDate = carData.eventTime?.lastEvent.date ? new Date(carData.eventTime.lastEvent.date) : startDate;
  return diffDates(lastEventDate, startDate);
}
// для подсчета в других функциях - средний пробег в день
function getAverageMileageDay() {
  const averageMileageDay = dayTotal() / mileageTotal();
  return averageMileageDay;
}
console.log(getAverageMileageDay());
// при входе на страницу в конструктор с ифом на наличие настройки( в локалке должен быть ключ тру)
export function culcMaybeMileage(event: string) {
  const curDate = new Date((document.querySelector(`.${event}__input_date`) as HTMLInputElement).value);
  const lastEventDate = carData.eventTime?.lastEvent.date
    ? new Date(carData.eventTime.lastEvent.date)
    : new Date(carData.info.startDate);
  const maybeMileage = carData.indicators.averageMileageDay * diffDates(curDate, lastEventDate);
  return maybeMileage;
}

//в CarDate
export function culcCostOneKM(): number {
  const costOneKM = carData.indicators.spendMoneyTotal / mileageTotal();
  return costOneKM;
}
