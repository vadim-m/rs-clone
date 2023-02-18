import { pathURL } from '../constants/constants';
import { IUser } from '../types';
import { ICar } from '../types';
import { getUserID } from '../helpers/authentication';

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

export const getCar = async (id: string) => {
  const res = await fetch(`${pathURL.cars}/${id}`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};
