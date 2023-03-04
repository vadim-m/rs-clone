import { getCurrentLanguage } from '../utilits/getCurrentSettings';

const unitsRU = {
  distance: ', км',
  speed: ', км/ч',
  consumption: ', л/100км',
  volume: ', л',
};

const unitsEN = {
  distance: ', km',
  speed: ', km/h',
  consumption: ', l/100km',
  volume: ', l',
};

export function getPriceFuel(country: string) {
  let money = new Map([
    ['RU', ', ₽/л'],
    ['BY', ', BYN/л'],
    ['EN', ', $/л'],
    ['EU', ', €/л'],
  ]);
  if (getCurrentLanguage() === 'English') {
    money = new Map([
      ['RU', ', ₽/l'],
      ['BY', ', BYN/l'],
      ['EN', ', $/l'],
      ['EU', ', €/l'],
    ]);
    return money.get(country) as string;
  }
  return money.get(country) as string;
}

export function getUnits() {
  if (getCurrentLanguage() === 'English') {
    return unitsEN;
  } else {
    return unitsRU;
  }
}
