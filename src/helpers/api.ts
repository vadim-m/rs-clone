import { pathURL } from '../constants/constants';
import { IUser } from '../types';

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
