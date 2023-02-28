import { eventLang } from '../../lang/addEventLang';

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
            <div class="block w-full bg-myslate h-10 shadow-md dark:bg-slate-400 dark:shadow-inner"></div>
            <div class="mb-6 flex flex-col justify-center border-b pb-2 border-slate">
              <div class="mt-2 text-center">${
                eventLang().fuelСonsumption
              }<span>февраль</span> <span>2023</span> <span>${eventLang().yearStat}</span></div>
              <div class="flex justify-center">
                <canvas id="bar-chart" style="min-width: 250px; min-height: 250px"></canvas>
              </div>
            </div>
            <div class="statistic__average-expense text-right border-b pb-2 border-slate">
              ${eventLang().averageExpenses}: <span>8.1</span> ${eventLang().l100}<br>
              ${eventLang().min} <span>5.7</span> ${eventLang().max} <span>15.6</span> ${eventLang().l100}<br>
              ${eventLang().recentExpenses} <span>9.2</span> ${eventLang().l100}<br>
            </div>

            <div class="statistic__calc calc text-2xl text-slate-400 mt-6 mb-2 ml-1">Калькулятор расхода топлива</div>
              <ul class="calc__container">
                <li class="calc__content mb-2">
                    <div class="calc__title text-base">Средний расход, л/100км.</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.01" class="calc__input text-lg text-gray-300 border-b w-full px-2 py-1 focus:outline-none focus:border-black focus:text-black rounded-md dark:bg-slate-400 dark:placeholder:text-slate-800" placeholder="${
                        eventLang().averageExpenses
                      }" validate="" id="calc__input_average-expense">
                      <span class="calc__clear-button absolute right-1 top-2.5 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span>
                    </div>
                </li>
                <li class="calc__content mb-2">
                    <div class="calc__title text-base">${eventLang().distance}</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.001" class="calc__input text-lg px-2 py-1 text-gray-300 border-b w-full focus:outline-none focus:border-black focus:text-black rounded-md dark:bg-slate-400 dark:placeholder:text-slate-800" placeholder="${
                        eventLang().averageExpenses
                      }" validate="" id="calc__input_distance">
                      <span class="calc__clear-button absolute right-1 top-2.5 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span> </div>
                </li>
                <li class="calc__content">
                    <div class="calc__title text-base">${eventLang().price} ₽/л</div>
                    <div class="calc__wrap relative">
                      <input type="number" inputmode="decimal" step="0.01" class="calc__input text-lg px-2 py-1 text-gray-300 border-b w-full focus:outline-none focus:border-black focus:text-black rounded-md dark:bg-slate-400 dark:placeholder:text-slate-800" placeholder="Цена" validate="" id="calc__input_fuel-price"> 
                      <span class="calc__clear-button absolute right-1 top-2.5 cursor-pointer">
                        <img class="calc__icon w-4 h-4" src="${close}" alt="close-icon">
                      </span> </div>
                </li>
              </ul>

        <div class="block-title calc text-2xl text-slate-400 mt-4 ml-1 mb-2">${eventLang().calculation}</div>
          <ul>
            <li class="calc__content mb-2 border-b w-full">
              <div class="item-header text-base">${eventLang().forecast}</div> 
              <span class="calc__result-value text-lg text-slate-900 font-bold dark:text-white" id="result-value">0.00</span><span> ${
                eventLang().l
              }</span>
            </li>
            <li class="border-b w-full">
              <div class="item-header  text-base">${eventLang().fuelCost}</div>
              <span class="calc__result-sum text-lg text-slate-900 font-bold dark:text-white" id="result-sum">0.00</span><span> ₽</span> 
            </li>
          </ul>

          </div>
          <label for="carousel-1" class="prev control-2 absolute cursor-pointer hidden text-xl text-myblue hover:text-white leading-tight text-center z-10 top-2 left-0 ml-12">${
            eventLang().total
          }</label>
          <label for="carousel-3" class="next control-2 absolute hidden text-xl leading-tight text-center z-10 top-2 right-0 mr-12">${
            eventLang().consumption
          }</label>      
    `;
  }
}
