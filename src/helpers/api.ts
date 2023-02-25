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

// Functions for TODO app

export const getTaskAPI = async () => {
  (await fetch(`${pathURL.toDoTasks}`)).json();
};

export const postTask = async (text: string) => {
  (
    await fetch(pathURL.toDoTasks, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
        status: false,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
  ).json();
};

export const deleteTask = async (id: string) =>
  (await fetch(`${pathURL.toDoTasks}/${id}`, { method: 'DELETE' })).json();

export const updateTasks = async (id: string, text: string, status: boolean) =>
  (
    await fetch(`${pathURL.toDoTasks}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        text: text,
        status: status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
