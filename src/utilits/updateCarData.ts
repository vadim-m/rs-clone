import { ICarData, IOther, IRefuel, IService } from '../types';
import { culcConsumption, updateIndicatirs } from './mathSpend';

export function updateCarData(
  carData: ICarData,
  eventPage: string,
  eventArr: IRefuel[] | IService[] | IOther[],
  newEvent: IRefuel | IService | IOther
) {
  const allInputPage = document.querySelectorAll(`.${eventPage}__input`) as NodeList;
  if (Array.from(allInputPage).every((e) => (e as HTMLInputElement).checkValidity())) {
    if (eventPage === 'refuel') (eventArr as IRefuel[]).push(newEvent as IRefuel); // добавляем заправку в event -> refuel
    if (eventPage === 'service') (eventArr as IService[]).push(newEvent as IService); // добавляем событие в event -> service
    if (eventPage === 'other') (eventArr as IOther[]).push(newEvent as IOther); // добавляем заправку в event -> other
    eventArr.sort((a, b) => {
      return +new Date(a.date) - +new Date(b.date);
    });
    updateIndicatirs(eventPage, carData); // обновляем все индикаторы
    if (eventPage === 'refuel') culcConsumption(carData); // только для заправки
    localStorage.setItem('car', JSON.stringify(carData)); // обновляем полностью carData
    // event.preventDefault();
  }
}
