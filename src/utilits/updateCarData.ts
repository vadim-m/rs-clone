import { eventLang } from '../lang/addEventLang';
import { ICarData, IOther, IRefuel, IService, IReminders } from '../types';
import { updateIndicatirs } from './mathSpend';

export function updateCarData(
  carData: ICarData,
  eventPage: string,
  eventArr: IRefuel[] | IService[] | IOther[] | IReminders[],
  newEvent: IRefuel | IService | IOther | IReminders
) {
  console.log(eventArr.some((e) => e.id === newEvent.id));
  if (eventArr.some((e) => e.id === newEvent.id) && eventPage === 'reminder') {
    const nameDOM = document.querySelector(`#reminder__input_name`) as HTMLInputElement;
    nameDOM.setCustomValidity(`${eventLang().validatorName}`);
  } else {
    if (eventPage === 'refuel') (eventArr as IRefuel[]).push(newEvent as IRefuel); // добавляем заправку в event -> refuel
    if (eventPage === 'service') (eventArr as IService[]).push(newEvent as IService); // добавляем событие в event -> service
    if (eventPage === 'other') (eventArr as IOther[]).push(newEvent as IOther); // добавляем заправку в event -> other
    if (eventPage === 'reminder') (eventArr as IReminders[]).push(newEvent as IReminders); //добавляем напоминание в event -> reminder
    if (eventPage !== 'reminder') {
      eventArr.sort((a, b) => {
        return +new Date((a as IRefuel | IService | IOther).date) - +new Date((b as IRefuel | IService | IOther).date);
      });
      updateIndicatirs(eventPage, carData); // обновляем все индикаторы
    }

    localStorage.setItem('car', JSON.stringify(carData)); // обновляем полностью carData}
  }
}
