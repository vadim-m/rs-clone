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

// export function getMoney(country: string, litr?: string) {
//   const money = new Map([
//     ['RU', ', ₽'],
//     ['BY', ', BYN'],
//     ['EN', ', $'],
//     ['EU', ', €'],
//   ]);
//   return litr ? `${money.get(country)}/${getCurrentLanguage() === 'EN' ? 'l' : 'л'}` : money.get(country);
// }

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
