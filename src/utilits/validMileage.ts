import { ICarData } from '../types';
import { maxMilaeage, minMilaeage } from './mathSpend';

export function changeMileage(eventPage: string, carData: ICarData) {
  const mileageDOM = document.querySelector(`.${eventPage}__input_mileage`) as HTMLInputElement;
  const dateDOM = document.querySelector(`.${eventPage}__input_date`) as HTMLInputElement;

  mileageDOM.addEventListener('change', () => {
    mileageDOM.min = minMilaeage(eventPage, carData);
    mileageDOM.max = maxMilaeage(eventPage, carData);
  });
  dateDOM.addEventListener('change', () => {
    mileageDOM.min = minMilaeage(eventPage, carData);
    mileageDOM.max = maxMilaeage(eventPage, carData);
  });
}
