import { ISettingsMyCar } from '../types';

const API_URL = 'http://localhost:3000/api';

export const pathURL = {
  login: `${API_URL}/auth/login`,
  registration: `${API_URL}/auth/registration`,
  cars: `${API_URL}/cars`,
};

export const defaultSettings: ISettingsMyCar = {
  fullName: 'Unknown User',
  hasCar: false,
  language: 'RU',
  currency: 'BYN',
  darkTheme: false,
  predictMileage: true,
  rememberPriceFuel: true,
};
