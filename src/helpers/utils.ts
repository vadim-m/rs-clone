import { ICar } from '../types';

export function prepareDataObj(data: ICar) {
  for (const key in data) {
    if (data[key as keyof typeof data] === '') delete data[key as keyof typeof data];
  }
  return data;
}
