const car = require('../../assets/images/chevrolet.png');
const expenses = require('../../assets/icons/expenses.png');
const finance = require('../../assets/icons/finance.png');
const coins = require('../../assets/icons/coins.png');
const gasStation = require('../../assets/icons/gas-station.png');

export class Info {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `       
        <div class="info__header pt-3 pb-3 flex justify-between">
          <h1 class="info__title font-bold text-lg">Мой автомобиль</h1>
        </div>
        <div class="info__car car bg-slate rounded-lg shadow-md mb-2 p-4 grid grid-areas-layout gap-x-2">
          <h3 class="car__name font-bold text-sm text-right grid-in-name">Chevrolet Aveo</h3>
          <p class="car__year text-xs text-right grid-in-year">2007 г.в.</з>
            <div class="car__mileage grid-in-mileage">
              <div class="car__mileage-total leading-3 mb-2">
                <h3 class="car__mileage-total_amount font-bold text-sm">
                  127 000<span> км</span>
                </h3>
                <span class="text-xs">Пробег</span>
              </div>
              <div class="car__mileage-average leading-3">
                <h3 class="car__mileage-average_amount font-bold text-sm">
                  8 500<span> км</span>
                </h3>
                <span class="text-xs">Пробег за <span>февраль</span></span>
              </div>
            </div>
              <img src="${car}" alt="car-image" class="car__image">

              <div class="info__stats grid-in-stats grid grid-cols-2 gap-4 mt-2">

                <div class="info__expenses flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 rounded-lg">
                  <img src="${expenses}" class="info__img w-7 h-7" alt="expenses-icon">
                  <div class="expenses">
                    <div class="expenses__title font-bold text-xxs">Затраты</div>
                    <div class="expenses__amount text-xxs">
                      <span class="expenses__sum">1000</span><span class="expenses__currency">₽</span>
                    </div>
                  </div>
                </div>

                <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2">
                  <img src="${finance}" class="info__img w-7 h-7" alt="petrol-icon">
                  <div class="petrol">
                    <div class="petrol__title font-bold text-xxs">
                      Затраты за месяц
                    </div>
                    <div class="petrol__amount text-xxs">
                      <span class="petrol__sum">0.0</span><span class="petrol__currency"> л/100км</span>
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
    `;

    return fragment.content;
  }
}
