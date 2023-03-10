import { ISettingsMyCar } from '../types';

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

const deleteToken = () => {
  localStorage.removeItem('token');
};

export const setUserID = (id: string) => {
  localStorage.setItem('userID', id);
};

export const getUserID = () => {
  return localStorage.getItem('userID') ?? '';
};

const deleteUserID = () => {
  localStorage.removeItem('userID');
};

const deleteCarfromLS = () => {
  localStorage.removeItem('car');
};

export const setUserSettings = (settings: ISettingsMyCar) => {
  localStorage.setItem('settingsCar', JSON.stringify(settings));
};

export const deleteUserSettings = () => {
  localStorage.removeItem('settingsCar');
};

export const isAuthenticated = () => {
  if (getToken()) {
    return true;
  }

  return false;
};

export const loguot = () => {
  deleteToken();
  deleteUserID();
  deleteUserSettings();
  deleteCarfromLS();

  location.href = '/';
};
