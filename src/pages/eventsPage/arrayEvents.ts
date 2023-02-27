import { ICarData, IEvent, IParamsOneEvents } from '../../types';
import { carData } from '../../car/car_data';
import { icon } from '../../components/iconFont';

export const showEvents = {
  refuel: 'refuel',
  service: 'service',
  others: 'others',
  all: 'all',
};

function iconEvent(eventType: string): string {
  if (eventType === 'refuel') return icon.gasPumpYellow;
  if (eventType === 'service') return icon.wrenchRed;
  else return icon.walletBlue;
}

export function createArrEvents(showEventsValue: string): IParamsOneEvents[] {
  const myCarData: ICarData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;
  let myEventsArr: IEvent[];
  switch (showEventsValue) {
    case 'refuel':
      myEventsArr = myCarData.event.refuel.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      break;
    case 'service':
      myEventsArr = myCarData.event.service.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      break;
    case 'others':
      myEventsArr = myCarData.event.others.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      break;
    default:
      myEventsArr = [...myCarData.event.refuel, ...myCarData.event.service, ...myCarData.event.others].sort(
        (a, b) => +new Date(b.date) - +new Date(a.date)
      );
  }
  const myEventsPageArr: IParamsOneEvents[] = [];

  myEventsArr.forEach((e) => {
    return myEventsPageArr.push({
      class: `${e.typeEvent}`,
      titleName: e.name,
      mileage: e.mileage,
      date: e.date,
      titleType: e.type ? e.type : '',
      amountFuel: e.amountFuel ? e.amountFuel : '',
      icon: iconEvent(`${e.typeEvent}`),
      costWorks: e.costWorks ? e.costWorks : '',
      isFullTank: e.isFull,
      priceFuel: e.priceFuel ? e.priceFuel : '',
      totalPrice: e.totalPrice,
      eventType: e.typeEvent,
      place: e.place,
      notes: e.notes,
      id: e.id,
    });
  });
  return myEventsPageArr;
}
