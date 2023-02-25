import { ICarData, IInfo } from '../types';

// получить машину из LC
export function getCarFromLC(): ICarData | null {
  return JSON.parse(localStorage.getItem('car') as string) ?? null;
}
// записать машину LC после запроса на сервер]

export function getAppSettings(): IInfo | null {
  return JSON.parse(localStorage.getItem('settingsCar') as string) ?? null;
}
