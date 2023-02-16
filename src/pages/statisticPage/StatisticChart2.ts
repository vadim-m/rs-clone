const close = require('../../assets/icons/close.png');

export class StatisticChart2 {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 hidden pb-20">
            <div class="block w-full bg-myslate h-10 shadow-md"></div>
            <div class="mb-6 flex justify-center border-b pb-2 border-slate"><canvas id="bar-chart" style="min-width: 250px; min-height: 250px"></canvas></div>
            <div class="statistic__average-expense text-right border-b pb-2 border-slate">
              Средний расход: <span>8.1</span> л/100км.<br>
              Мин: <span>5.7</span> Макс: <span>15.6</span> л/100км.<br>
              Последний расход: <span>9.2</span> л/100км.<br>
            </div>

            <div class="statistic__calc calc text-2xl text-slate-400 mt-6 mb-2 ml-1">Калькулятор расхода топлива</div>
              <ul class="calc__container">
                <li class="calc__content mb-2">
                    <div class="calc__title text-base">Средний расход, л/100км.</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.01" class="calc__input text-lg text-gray-300 border-b w-full focus:outline-none focus:border-black focus:text-black" placeholder="Средний расход" validate="" id="calc__input_average-expense">
                      <span class="calc__clear-button absolute right-0 top-1 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span>
                    </div>
                </li>
                <li class="calc__content mb-2">
                    <div class="calc__title text-base">Расстояние, км.</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.001" class="calc__input text-lg text-gray-300 border-b w-full focus:outline-none focus:border-black focus:text-black" placeholder="Средний расход" validate="" id="calc__input_distance">
                      <span class="calc__clear-button absolute right-0 top-1 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span> </div>
                </li>
                <li class="calc__content">
                    <div class="calc__title text-base">Цена, ₽/л</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.01" class="calc__input text-lg text-gray-300 border-b w-full focus:outline-none focus:border-black focus:text-black" placeholder="Цена" validate="" id="calc__input_fuel-price"> 
                      <span class="calc__clear-button absolute right-0 top-1 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span> </div>
                </li>
              </ul>

        <div class="block-title calc text-2xl text-slate-400 mt-4 ml-1 mb-2">Расчет</div>
          <ul>
            <li class="calc__content mb-2 border-b w-full">
              <div class="item-header text-base">Прогноз расхода топлива</div> 
              <span class="calc__result-value text-lg text-slate-900 font-bold" id="result-value">0.00</span><span> л</span>
            </li>
            <li class="border-b w-full">
              <div class="item-header  text-base">Стоимость топлива</div>
              <span class="calc__result-sum text-lg text-slate-900 font-bold" id="result-sum">0.00</span><span> ₽</span> 
            </li>
          </ul>

          </div>
          <label for="carousel-1" class="prev control-2 absolute cursor-pointer hidden text-xl text-myblue hover:text-white leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
          <label for="carousel-3" class="next control-2 absolute hidden text-xl leading-tight text-center z-10 top-2 right-0 mr-12">Расход</label>      
    `;
  }
}
