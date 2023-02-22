import { ICar } from '../../types';

const expenses = require('../../assets/icons/expenses.png');
const finance = require('../../assets/icons/finance.png');
const coins = require('../../assets/icons/coins.png');
const gasStation = require('../../assets/icons/gas-station.png');
const gear = require('../../assets/icons/gear.svg');

export class Info {
  public element: DocumentFragment;
  private car: ICar | null;

  constructor(car: ICar | null) {
    this.car = car;
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
        <div class="info__header pt-3 pb-3 flex justify-between">
          <h1 class="info__title font-bold text-lg">Мой автомобиль</h1>
          <button class="info__btn" id="change-car">
            <img src="${gear}" class="info__gear w-7 h-7 mr-4" alt="gear-icon">
          </button>
        </div>

        <div class="info__car car bg-myslate rounded-lg shadow-md mb-2 p-4 grid md:grid-cols-2 gap-x-2">
          <div class="md:order-1 flex flex-col justify-between">
            <div><h3 class="car__name font-bold text-xl text-right grid-in-name">${this.car?.brand} ${this.car?.model}</h3>
            <p class="car__year text-sm text-right grid-in-year">${this.car?.year}</p></div>
          </div>

          <div>
            <div class="info__stats grid-in-stats grid grid-cols-1 gap-4 mt-2">
              <div class="info__expenses flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2">
                <img src="${expenses}" class="info__img w-7 h-7" alt="expenses-icon">
                <div class="expenses">
                  <div class="expenses__title font-bold text-xxs">Затраты на машину</div>
                  <div class="expenses__amount text-xxs">
                    <span class="expenses__sum">1000</span><span class="expenses__currency">₽</span>
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2">
                <img src="${finance}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xxs">
                    Пробег
                  </div>
                  <div class="text-xxs">
                    <span>${this.car?.mileage}</span>км 
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 pr-2">
                <img src="${coins}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xxs">
                    Стоимость бензина
                  </div>
                  <div class="petrol__amount text-xxs">
                    <span class="petrol__sum">0.0</span><span class="petrol__currency"> руб/км</span>
                  </div>
                </div>
              </div>

              <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2">
                <img src="${gasStation}" class="info__img w-7 h-7" alt="petrol-icon">
                <div class="petrol">
                  <div class="petrol__title font-bold text-xs">
                    Расход бензина
                  </div>
                  <div class="petrol__amount text-xxs">
                    <span class="petrol__sum">0.0</span><span class="petrol__currency"> л/100км</span>
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
