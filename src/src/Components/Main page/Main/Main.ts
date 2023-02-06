export class Main {
  render() {
    return `       
      <section class="info">
        <h1 class="info__title pt-3 pb-1 font-bold text-lg">Мой автомобиль</h1>
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
              <img src="./assets/images/chevrolet.png" alt="car-image" class="car__image">

              <div class="info__stats grid-in-stats grid grid-cols-2 gap-4 mt-2">

                <div class="info__expenses flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2 rounded-lg">
                  <img src="./assets/icons/expenses.png" class="info__img w-7 h-7" alt="expenses-icon">
                  <div class="expenses">
                    <div class="expenses__title font-bold text-xxs">Затраты</div>
                    <div class="expenses__amount text-xxs">
                      <span class="expenses__sum">1000</span><span class="expenses__currency">₽</span>
                    </div>
                  </div>
                </div>

                <div class="info__petrol flex gap-3 items-center bg-white p-1 drop-shadow-md pl-2">
                  <img src="./assets/icons/finance.png" class="info__img w-7 h-7" alt="petrol-icon">
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
                  <img src="./assets/icons/coins.png" class="info__img w-7 h-7" alt="petrol-icon">
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
                  <img src="./assets/icons/gas-station.png" class="info__img w-7 h-7" alt="petrol-icon">
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
      </section>

      <section class="plans">
        <h2 class="plans__title font-medium text-sm mb-2">Ближайшие планы</h2>
        <ul class="plans__list grid gap-y-3 mb-4">
          <li class="plans__item relative bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 shadow-md">
            <div class="plans__bar absolute bottom-14 right-0 bg-blue text-white text-xs px-3 py-1 rounded-md">Через 10 дней</div>
            <div class="plans__item-and-icon flex items-center mr-2">
              <img src="./assets/icons/car-oil.png" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
              <div class="plans__text">
                <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
                <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
                </span>
              </div>
            </div>
            <div class="plans__date text-xs font-bold">25 дек. 2022 г.</div>
          </li>
          <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
            <div class="plans__item-and-icon flex">
              <img src="./assets/icons/car-repair.png" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
              <h3 class="plans__title text-sm font-bold mb-1 leading-3">Диагностика подвески</h3>
            </div>
            <button class="plans__button button text-xs bg-blue text-white px-3 py-1 rounded-md">Добавить</button>
          </li>
          <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
            <div class="plans__item-and-icon flex">
              <img src="./assets/icons/gear.png" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
              <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена фильтров</h3>
            </div>
            <button class="plans__button button text-xs bg-blue text-white px-3 py-1 rounded-md">Добавить</button>
          </li>
        </ul>
      </section>

      <section class="events relative py-2 px-4 rounded-lg bg-slate">
        <h2 class="events__title font-medium text-sm mb-2">Последние события</h2>
        <ul class="events__list grid gap-y-3">
          <li class="events__item grid grid-cols-layout justify-between items-center p-2 drop-shadow-md bg-white">
            <div class="events__item-and-icon flex items-center mr-2">
              <img src="./assets/icons/funnel.png" class="plans__image w-7 h-7 mr-4" alt="funnell-icon">
              <div class="events__text flex flex-col">
                <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена топливного фильтра</h3>
                <span class="events__addition text-xxs leading-3 inline-block">Вместе с фильтром. Автосервис "Перекресток"
                </span>
              </div>
            </div>
            <div class="events__date-and-price">
              <div class="events__price text-xs font-bold mb-1">3 900 ₽</div>
              <div class="events__date text-xxs leading-3">20 февр. 2023 г.</div>
            </div>
          </li>

          <li class="events__item grid grid-cols-layout justify-between items-center p-2 drop-shadow-md bg-white">
            <div class="events__item-and-icon flex items-center mr-2">
              <img src="./assets/icons/tires.png" class="plans__image w-7 h-7 mr-4" alt="funnell-icon">
              <div class="events__text flex flex-col">
                <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена резины</h3>
                <span class="events__addition text-xxs leading-3 inline-block">СТО на ул.Приморской"
                </span>
              </div>
            </div>
            <div class="events__date-and-price">
              <div class="events__price text-xs font-bold mb-1">1 300 ₽</div>
              <div class="events__date text-xxs leading-3">1 марта 2023 г.</div>
            </div>
          </li>

        </ul>
      </section>
    `;
  }
}
