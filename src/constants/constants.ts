import { ISettingsMyCar } from '../types';

const API_URL = 'https://api-test-rs-clone.vercel.app/api';

export const pathURL = {
  login: `${API_URL}/auth/login`,
  registration: `${API_URL}/auth/registration`,
  cars: `${API_URL}/cars`,
  settings: `${API_URL}/settings`,
  todo: `${API_URL}/todo`,
  refuels: `${API_URL}/refuels`,
  reminders: `${API_URL}/reminders`,
  services: `${API_URL}/services`,
  others: `${API_URL}/others`,
};

export const defaultSettings: ISettingsMyCar = {
  fullName: 'Unknown User',
  hasCar: false,
  language: 'Русский',
  currency: '₽',
  darkTheme: false,
  predictMileage: true,
  rememberPriceFuel: true,
  orientation: false,
};
