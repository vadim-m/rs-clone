import { ICarData } from '../types';
import { maxMilaeage, minMilaeage } from './mathSpend';

export function changeMileage(eventPage: string, carData: ICarData) {
  const mileageDOM = document.querySelector(`.${eventPage}__input_mileage`) as HTMLInputElement;
  const dateDOM = document.querySelector(`.${eventPage}__input_date`) as HTMLInputElement;

  mileageDOM.addEventListener('change', () => {
    console.log('проверка');
    const newCarData: ICarData = localStorage.getItem('car')
      ? JSON.parse(localStorage.getItem('car') as string)
      : carData;
    mileageDOM.min = minMilaeage(eventPage, newCarData);
    mileageDOM.max = maxMilaeage(eventPage, newCarData);
  });
  dateDOM.addEventListener('change', () => {
    console.log('проверка2');
    const newCarData: ICarData = localStorage.getItem('car')
      ? JSON.parse(localStorage.getItem('car') as string)
      : carData;
    mileageDOM.min = minMilaeage(eventPage, newCarData);
    mileageDOM.max = maxMilaeage(eventPage, newCarData);
  });
}
