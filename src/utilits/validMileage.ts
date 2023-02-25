import { ICarData } from '../types';

// валидтор пробега - устанавливается мин и макс для пробега в зависимости от даты

function minMilaeage(curEvent: string, carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  if (allEvents.length > 0) {
    const curDate = (document.querySelector(`.${curEvent}__input_date`) as HTMLInputElement).value;
    if (
      new Date(curDate) < new Date(String(carData.info.startDate)) ||
      new Date(curDate) < new Date(allEvents[0].date)
    ) {
      return '0';
    } else {
      const beforeDateEvents = allEvents.filter((e) => {
        return new Date(e.date) < new Date(curDate);
      });
      console.log(beforeDateEvents);
      const lastMileageBefore =
        beforeDateEvents.length > 0
          ? beforeDateEvents[beforeDateEvents.length - 1].mileage
          : String(carData.info.mileage);
      return lastMileageBefore;
    }
  } else return String(carData.info.mileage);
}

function maxMilaeage(curEvent: string, carData: ICarData): string {
  const allEvents = [...carData.event.refuel, ...carData.event.service, ...carData.event.others];
  const curDate = (document.querySelector(`.${curEvent}__input_date`) as HTMLInputElement).value;
  if (allEvents.length > 0) {
    const afterDateEvents = allEvents.filter((e) => {
      return new Date(e.date) > new Date(curDate);
    });
    const firstMileageAfter = afterDateEvents[0]?.mileage ? afterDateEvents[0].mileage : '';
    return firstMileageAfter;
  }
  return '';
}

export function changeMileage(eventPage: string, carData: ICarData) {
  const mileageDOM = document.querySelector(`.${eventPage}__input_mileage`) as HTMLInputElement;
  const dateDOM = document.querySelector(`.${eventPage}__input_date`) as HTMLInputElement;

  function minMaxMileage(): void {
    mileageDOM.min = minMilaeage(eventPage, carData);
    mileageDOM.max = maxMilaeage(eventPage, carData);
  }
  mileageDOM.addEventListener('change', minMaxMileage);
  dateDOM.addEventListener('change', minMaxMileage);
}
