import { pathURL } from '../constants/constants';
import { IUser } from '../types';
import { INewCar } from '../types';

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

export const addCar = async (body: INewCar) =>
  (
    await fetch(pathURL.newcar, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getCars = async () => {
  const response = await fetch(pathURL.newcar);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
