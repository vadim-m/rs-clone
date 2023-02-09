import { getCurrentLanguage } from './lang/currentLang';

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

export function getMoney(country: string) {
  const money = new Map([
    ['RU', ', ₽'],
    ['BY', ', BYN'],
    ['EN', ', $'],
    ['EU', ', €'],
  ]);
  return money.get(country);
}

export function getUnits() {
  if (getCurrentLanguage() === 'EN') {
    return unitsEN;
  } else {
    return unitsRU;
  }
}
