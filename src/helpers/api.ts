import { pathURL } from '../constants/constants';
import { IUser } from '../types';

export const login = async (body: IUser) => {
  const response = await fetch(pathURL.login, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};