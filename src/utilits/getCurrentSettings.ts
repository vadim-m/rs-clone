import { carData } from '../car/car_data';
import { ICarData, ISettingsMyCar } from '../types';
import { defaultSettings } from '../constants/constants';

export function mySetting(): ISettingsMyCar {
  return localStorage.getItem('settingsCar')
    ? JSON.parse(localStorage.getItem('settingsCar') as string)
    : defaultSettings;
}

export function getSettingsFromLocal(): ISettingsMyCar | undefined {
  if (localStorage.getItem('settingsCar')) {
    return JSON.parse(localStorage.getItem('settingsCar') as string);
  }
}
export function getCurrentLanguage(): string {
  return getSettingsFromLocal()?.language ? (getSettingsFromLocal() as ISettingsMyCar).language : 'Русский';
}

export function getCurrentCurrency(): string {
  return getSettingsFromLocal()?.currency ? (getSettingsFromLocal() as ISettingsMyCar).currency : 'BYN';
}

export function getCurrentPriceFuel(): string {
  const curCarData: ICarData = localStorage.getItem('car')
    ? JSON.parse(localStorage.getItem('car') as string)
    : carData;
  if (curCarData.event.refuel.length > 0) {
    return getSettingsFromLocal()?.rememberPriceFuel
      ? curCarData.event.refuel[curCarData.event.refuel.length - 1].priceFuel
      : '';
  }
  return '';
}
