import { pathURL } from '../constants/constants';
import { IOther, IRefuel, IReminders, IService, ISettingsMyCar, IToDo, IUser } from '../types';
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

export const updateSettings = async (body: ISettingsMyCar) => {
  updateUserID();
  const res = await fetch(`${pathURL.settings}/id`, {
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

export const updateTodo = async (body: IToDo, id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.todo}/${id}`, {
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

export const deleteTodo = async (id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.todo}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

//* Refuels
export const createRefuel = async (body: IRefuel) => {
  updateUserID();
  const res = await fetch(pathURL.refuels, {
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

export const getRefuels = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.refuels}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const updateRefuel = async (body: IRefuel, id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.refuels}/${id}`, {
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

export const deleteRefuel = async (id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.refuels}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

//* Reminders
export const createReminder = async (body: IReminders) => {
  updateUserID();
  const res = await fetch(pathURL.reminders, {
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

export const getReminders = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.reminders}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const updateReminder = async (body: IReminders, id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.reminders}/${id}`, {
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

export const deleteReminder = async (id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.reminders}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

//* Services
export const createService = async (body: IService) => {
  updateUserID();
  const res = await fetch(pathURL.services, {
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

export const getServices = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.services}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const updateService = async (body: IService, id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.services}/${id}`, {
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

export const deleteService = async (id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.services}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};

//* Others
export const createOther = async (body: IOther) => {
  updateUserID();
  const res = await fetch(pathURL.others, {
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

export const getOthers = async () => {
  updateUserID();
  const res = await fetch(`${pathURL.others}/id`, {
    // после добавления passport удалить!
    headers: {
      'user-id': userId,
    },
  });

  return res;
};

export const updateOther = async (body: IOther, id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.others}/${id}`, {
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

export const deleteOther = async (id: string) => {
  updateUserID();
  const res = await fetch(`${pathURL.others}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // после добавления passport удалить!
      'user-id': userId,
    },
  });

  return res;
};
