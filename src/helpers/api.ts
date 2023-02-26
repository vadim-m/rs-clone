import { pathURL } from '../constants/constants';
import { IUser } from '../types';
import { ICar } from '../types';
import { getUserID } from '../helpers/authentication';
import { ISettings } from '../types';

const userId = getUserID();

export const login = async (body: IUser) => {
  const res = await fetch(pathURL.login, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};

export const registration = async (body: IUser) => {
  const res = await fetch(pathURL.registration, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};

export const createCar = async (body: ICar) => {
  const res = await fetch(pathURL.cars, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

export const updateCar = async (body: ICar, id: string) => {
  const res = await fetch(`${pathURL.cars}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

export const getCar = async () => {
  const res = await fetch(`${pathURL.cars}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const deleteCar = async (id: string) => {
  const res = await fetch(`${pathURL.cars}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

export const updateSettings = async (body: ISettings, id: string) => {
  const res = await fetch(`${pathURL.settings}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};
