import { IInfo } from '../../types';

const expenses = require('../../assets/icons/expenses.png');
const finance = require('../../assets/icons/finance.png');
const coins = require('../../assets/icons/coins.png');
const gasStation = require('../../assets/icons/gas-station.png');
const gear = require('../../assets/icons/gear.svg');

import { getCarInfoFromLS } from '../../helpers/localStorage';
import { setLogo } from '../../helpers/utils';
import { eventLang } from '../../lang/addEventLang';

export class Info {
  public element: DocumentFragment;
  private car: IInfo | null;

  constructor() {
    this.car = getCarInfoFromLS();
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    const carImg = require(`../../assets/icons/brands/${setLogo(String(this.car?.brand))}.svg`);
    fragment.innerHTML = `
        <div class="info__header pt-3 pb-3 flex justify-between">
          <h1 class="info__title font-bold text-lg">${eventLang().myCar}</h1>
          <button class="info__btn" id="change-car">
            <img src="${gear}" class="info__gear w-7 h-7 mr-4" alt="gear-icon">
          </button>
        </div>

        <div class="info__car car bg-myslate rounded-lg shadow-md mb-4 p-4 grid-cols-2 gap-x-2 dark:bg-slate-700">
          <div class="flex justify-between">
            <div>
            <img src="${carImg}" class="info__logo w-20 h-20" alt="logo-icon">
            </div>
            <div class="self-center">
              <h3 class="car__name font-bold text-xl text-right">
              ${this.car?.brand} ${this.car?.model}
              </h3>
            <p class="car__year text-sm text-right">${this.car?.year}</p></div>
          </div>

          <div>
            <div class="info__stats grid grid-cols-2 gap-4 mt-2">
              <div class="info__expenses flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 dark:bg-slate-500">
                <img src="${expenses}" class="info__img w-7 h-7" alt="expenses-icon">
                <div class="expenses">
                  <div class="expenses__title font-bold text-xxs">${eventLang().carCosts}</div>
                  <div class="expenses__amount text-xxs">
                    <span class="expenses__sum">1000</span><span class="expenses__currency"> ₽</span>
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 dark:bg-slate-500">
                <img src="${finance}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xxs">
                  ${eventLang().mileage}
                  </div>
                  <div class="text-xxs">
                    <span>${this.car?.mileage}</span> ${eventLang().km} 
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 pr-2 dark:bg-slate-500">
                <img src="${coins}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xxs">
                  ${eventLang().gasolineCost}
                  </div>
                  <div class="petrol__amount text-xxs">
                    <span class="petrol__sum">0.0</span><span class="petrol__currency"> ${eventLang().rubKm}</span>
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 dark:bg-slate-500">
                <img src="${gasStation}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xs">
                  ${eventLang().gasMileage}
                  </div>
                  <div class="petrol__amount text-xxs">
                    <span class="petrol__sum">0.0</span><span class="petrol__currency"> ${eventLang().l100}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    `;

    return fragment.content;
  }
}
