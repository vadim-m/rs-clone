import { ICar } from '../types';
import { getAppSettingsFromLS } from './localStorage';
import { getCarInfoFromLS } from './localStorage';

export function prepareDataObj(data: ICar) {
  for (const key in data) {
    if (data[key as keyof typeof data] === '') delete data[key as keyof typeof data];
  }
  return data;
}

export function updateHeaderAndFooter() {
  const settings = getAppSettingsFromLS();

  const headerAbout = document.getElementById('header-about') as HTMLElement;
  const headerSettings = document.getElementById('header-settings') as HTMLElement;
  const headerToDo = document.getElementById('header-todo') as HTMLElement;
  const headerExit = document.getElementById('header-exit') as HTMLButtonElement;

  const sideCar = document.getElementById('side-mycar') as HTMLElement;
  const sideAbout = document.getElementById('side-about') as HTMLElement;
  const sideSettings = document.getElementById('side-settings') as HTMLElement;
  const sideToDo = document.getElementById('side-todo') as HTMLElement;
  const sideExit = document.getElementById('side-exit') as HTMLButtonElement;

  const footerMain = document.getElementById('footer-main') as HTMLElement;
  const footerEvents = document.getElementById('footer-events') as HTMLElement;
  const footerPlans = document.getElementById('footer-plans') as HTMLElement;
  const footerStat = document.getElementById('footer-stat') as HTMLElement;

  if (settings?.language === 'English') {
    headerAbout.textContent = 'About Us';
    headerSettings.textContent = 'Settings';
    headerToDo.textContent = 'Notes';
    headerExit.textContent = 'Exit';

    sideCar.textContent = 'My car';
    sideAbout.textContent = 'About Us';
    sideSettings.textContent = 'Settings';
    sideToDo.textContent = 'Notes';
    sideExit.textContent = 'Exit';

    footerMain.textContent = 'Main';
    footerEvents.textContent = 'Events';
    footerPlans.textContent = 'Plans';
    footerStat.textContent = 'Statistics';
  } else if (settings?.language === 'Русский') {
    headerAbout.textContent = 'О нас';
    headerSettings.textContent = 'Настройки';
    headerToDo.textContent = 'Заметки';
    headerExit.textContent = 'Выход';

    sideCar.textContent = 'Мой автомобиль';
    sideAbout.textContent = 'О нас';
    sideSettings.textContent = 'Настройки';
    sideToDo.textContent = 'Заметки';
    sideExit.textContent = 'Выход';

    footerMain.textContent = 'Главная';
    footerEvents.textContent = 'События';
    footerPlans.textContent = 'Планы';
    footerStat.textContent = 'Статистика';
  }
}

export function updateSideMenu() {
  const car = getCarInfoFromLS();

  const sideBrand = document.getElementById('side-brand') as HTMLElement;
  const sideYear = document.getElementById('side-year') as HTMLElement;
  const sideImg = document.getElementById('side-img') as HTMLImageElement;

  sideBrand.textContent = `${car?.brand} ${car?.model}`;
  sideYear.textContent = `${car?.year}`;
  sideImg.src = require(`../assets/icons/brands/${setLogo(String(car?.brand))}.svg`);
}

export function setLogo(logo: string) {
  const logoName = logo.split(' ')[0].toLowerCase() as string;
  const brands = [
    'alfa',
    'aro',
    'aston',
    'audi',
    'avia',
    'bentley',
    'bmw',
    'bristol',
    'bugatti',
    'buick',
    'cadillac',
    'chatenet',
    'chevrolet',
    'chrysler',
    'citroen',
    'cupra',
    'dacia',
    'daewoo',
    'daf',
    'daihatsu',
    'datsun',
    'dodge',
    'ferrari',
    'fiat',
    'ford',
    'gordon',
    'great',
    'gumpert',
    'holden',
    'honda',
    'hummer',
    'hyundai',
    'infiniti',
    'invicta',
    'isuzu',
    'iveco',
    'jaguar',
    'jeep',
    'kaipan',
    'kia',
    'knaus',
    'koenigsegg',
    'lada',
    'lamborghini',
    'lancia',
    'land',
    'lexus',
    'liaz',
    'lincoln',
    'magma',
    'mahindra',
    'man',
    'maserati',
    'matra',
    'mazda',
    'mclaren',
    'mercedes',
    'mg',
    'mini',
    'mitsubishi',
    'москвич',
    'multicar',
    'nissan',
    'oltcit',
    'opel',
    'peugot',
    'pgo',
    'phanomen',
    'pontiac',
    'porsche',
    'praga',
    'renault',
    'rolls',
    'rover',
    'saab',
    'saleen',
    'seat',
    'simca',
    'skoda',
    'smart',
    'ssangyong',
    'subaru',
    'suzuki',
    'tatra',
    'tesla',
    'toyota',
    'trabant',
    'venturi',
    'volvo',
    'vw',
    'wartburg',
    'wiesmann',
    'volkswagen',
  ];
  return `${brands.includes(logoName) ? logoName : 'other-car'}`;
}
