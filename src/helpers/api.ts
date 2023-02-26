import { pathURL } from '../constants/constants';
import { IToDo, IUser } from '../types';
import { ICar } from '../types';
import { getUserID } from '../helpers/authentication';

let userId = getUserID();

const updateUserID = () => {
  userId = getUserID();
};

//* Auth
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

//* Cars
export const createCar = async (body: ICar) => {
  updateUserID();
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
  updateUserID();
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
  updateUserID();
  const res = await fetch(`${pathURL.cars}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const deleteCar = async (id: string) => {
  updateUserID();
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

//* Settings
export const getSettingsFromAPI = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.settings}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

//* ToDo
export const createTodo = async (body: IToDo) => {
  updateUserID();
  const res = await fetch(pathURL.todo, {
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

export const getTodos = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.todo}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};
