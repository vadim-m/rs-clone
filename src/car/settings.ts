import { defaultSettings } from '../constants/constants';
import { setUserSettings } from '../helpers/authentication';
import { ISettingsMyCar } from '../types';

export function mySetting(): ISettingsMyCar {
  return localStorage.getItem('settingsCar')
    ? JSON.parse(localStorage.getItem('settingsCar') as string)
    : setUserSettings(defaultSettings);
}
