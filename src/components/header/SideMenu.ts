import { eventLang } from '../../lang/addEventLang';
import { buttonLang } from '../../lang/buttonLang';
import { IInfo } from '../../types';
import { setLogo } from '../../helpers/utils';

import { getCarInfoFromLS } from '../../helpers/localStorage';
import { getAppSettingsFromLS } from '../../helpers/localStorage';

export class SideMenu {
  private car: IInfo | null;
  public element: DocumentFragment;

  constructor() {
    this.car = getCarInfoFromLS();
    this.element = this.createElement();
  }

  createElement() {
    const settings = getAppSettingsFromLS();

    const fragment = document.createElement('template');
    const carImg = require(`../../assets/icons/brands/${setLogo(String(this.car?.brand))}.svg`);
    fragment.innerHTML = `
    <div class="navbar__backdrop fixed inset-0 bg-gray-800 opacity-25 z-10 dark:bg-slate-400 hidden"></div>
	  <div class="navbar__menu absolute top-0 right-0 p-4 space-y-2 w-64 h-full bg-gray-50 text-gray-800 border z-40 dark:bg-slate-800 dark:text-gray-50 hidden" id="nav-bar">
      <div class="flex items-center py-2 space-x-4 mb-8">
        <h2 class="text-lg font-semibold">${settings?.fullName}</h2>
      </div>
    <div>
    <div class="text-sm" id="side-mycar">${eventLang().myCar}</div>
    <div class="info__car car flex items-center bg-slate rounded-lg shadow-md mb-6 px-3 py-2 dark:bg-slate-400">
      <img src="${carImg}" alt="car-image" class="car__image w-10 mr-6" id="side-img">
      <div>
      <h3 class="car__name font-bold text-xxs text-center" id="side-brand">${this.car?.brand} ${this.car?.model}</h3>
      <p class="car__year text-xxs text-center" id="side-year">${this.car?.year}</p>
      </div>
    </div>
  </div>
    <ul class="pt-2 pb-4 space-y-1 text-sm">
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="/aboutus" class="flex items-center p-2 space-x-3 rounded-md">
        <svg width="20px" height="20px" viewBox="0 0 24 24" class="w-5 h-5 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6b7280" stroke-width="2"/>
          <path d="M12 8L12 13" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 16V15.9888" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
        </svg>
          <span id="side-about">${eventLang().aboutUs}</span>
        </a>
      </li>
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="/todo" class="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
          </svg>
          <span id="side-todo">${eventLang().notes}</span>
        </a>
      </li>
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="/settings" class="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
            <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
          </svg>
          <span id="side-settings">${eventLang().settings}</span>
        </a>
      </li>
      <li>
        <a id="side-exit" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
            <rect width="32" height="64" x="256" y="232"></rect>
          </svg>
          <span >${buttonLang().exit}</span>
        </a>
      </li>
    </ul>
    <button class="navbar__close">
      <svg class="absolute top-2 right-1 h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
  </button> 

    `;
    return fragment.content;
  }
}
