import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartItem } from 'chart.js/dist/types/index';
import { StatisticHeader } from './StatisticHeader';
const close = require('../../assets/icons/close.png');

export class StatisticPage {
  parent: HTMLElement;
  private header = new StatisticHeader().element;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.createDoughnutChart([3000, 5000, 1000]);
    this.createBarChart();
    this.countForecast();
    this.clearInput();
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('statistic');
    fragment.innerHTML = `
      ${this.header}
      <div class="item-content item-link flex justify-between p-4 border-b border-t border-slate">
        <div class="item-title item-info flex flex-col items-center text-lg">
          <div class="item-header">Общий пробег:</div>
          <span class="item-title"><span class="chart_distance">91 158</span>  км.</span>
        </div>
        <div class="item-title item-info  flex flex-col items-center text-lg">
          <div class="item-header">Пробег за период:</div>
          <span class="item-title"><span id="chart__distance_period">27 858</span> км.</span>
        </div>
      </div>
      <div class="carousel relative">
        <div class="carousel-inner relative w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0 hidden">
            <div class="block w-full bg-myslate h-10 shadow-md"></div>
            <div class="mb-6 flex justify-center"><canvas id="acquisitions" style="max-width: 250px; max-height: 250px"></canvas></div>
            <div class="statistic__legend mb-8">
            <div class="statistic__fuels item flex pr-10 border-b border-t border-r border-slate">
              <div class="item__color w-4" style="background-color: rgb(250, 32, 32)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Заправки</div>
                <div class="item__after"><span><span class="item__sum" id="stat1"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
              <div class="item__color w-4" style="background-color: rgb(54, 162, 235)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Сервис</div>
                <div class="item__after"><span><span class="item__sum" id="stat2"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
              <div class="item__color w-4" style="background-color: rgb(255, 205, 86)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Другие расходы</div>
                <div class="item__after"><span><span class="item__sum" id="stat3"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex pr-2 border-b  border-l border-r border-slate">
              <div class="item__color w-4"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Всего</div>
                <div class="item__after"><span class="item__sum" id="stat4"></span><span id="stat__value">  ₽</span></div>
              </div>
            </div>
          </div>  

          <div class="statistic__all pb-20">
          <div class="statistic__all_title font-bold text-lg flex justify-center">Стоимость содержания: </div>
          <div class="statistic__all_content grid grid-cols-2">
            <div class="flex flex-col items-center">
              <div>Стоимость дня:</div>
              <div><span class="text-xl" id="wallet__day">18.45</span><span id="wallet__currency"> ₽/День</span></div>
            </div>
            <div class="flex flex-col items-center">
              <div>Стоимость км.:</div>
              <div><span class="text-xl" id="distance__wallet">0.25</span><span class="distance__currency"> ₽/км.</span></div>
            </div>
          </div>
        </div>
            
  </div>
          
          <label for="carousel-3" class="prev control-1 absolute hidden text-xl leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
          <label for="carousel-2" class="next control-1 absolute cursor-pointer hidden text-xl text-myblue hover:text-white leading-tight text-center z-10 top-2 right-0 mr-12">Расход</label>
          
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


        </div>
    </div>
      
    `;
    this.parent.append(fragment);
  }

  async createDoughnutChart(givenData: number[]) {
    const chart = document.getElementById('acquisitions') as ChartItem;

    const textCenter = {
      id: 'textCenter',
      afterDatasetsDraw(chart: Chart) {
        const {
          ctx,
          data,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          chartArea: { top, bottom, left, right, width, height },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          scales: { x, y },
        } = chart;

        ctx.save();

        let sum = 0;
        data.datasets[0].data.map((item) => (sum = Number(sum) + Number(item)));
        const currency = document.getElementById('stat__value')?.innerText;

        ctx.textAlign = 'center';
        ctx.font = '1.3rem sans-serif';
        ctx.fillText(`${sum}${currency}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
        ctx.lineWidth = 3;
      },
    };

    const myChart = new Chart(chart, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: givenData,
            backgroundColor: ['rgb(250, 32, 32)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
          },
        ],
      },
      plugins: [ChartDataLabels, textCenter],
    });

    const stat1 = document.getElementById('stat1') as HTMLElement;
    const stat2 = document.getElementById('stat2') as HTMLElement;
    const stat3 = document.getElementById('stat3') as HTMLElement;
    const stat4 = document.getElementById('stat4') as HTMLElement;
    stat1.innerText = String(myChart.data.datasets[0].data[0].toFixed(2));
    stat2.innerText = String(myChart.data.datasets[0].data[1].toFixed(2));
    stat3.innerText = String(myChart.data.datasets[0].data[2].toFixed(2));
    stat4.innerText = String(myChart.data.datasets[0].data.reduce((a, b) => a + b).toFixed(2));
  }

  async createBarChart() {
    const chart = document.getElementById('bar-chart') as ChartItem;

    const data = [
      { day: '01.02', count: 5.7 },
      { day: '02.02', count: 0 },
      { day: '03.02', count: 7.6 },
      { day: '04.02', count: 15.6 },
      { day: '05.02', count: 22 },
      { day: '06.02', count: 5.8 },
      { day: '07.02', count: 9.3 },
      { day: '08.02', count: 0 },
      { day: '09.02', count: 10.3 },
      { day: '10.02', count: 8.9 },
      { day: '11.02', count: 3.2 },
      { day: '12.02', count: 2.8 },
      { day: '13.02', count: 9.8 },
      { day: '14.02', count: 0 },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myChart = new Chart(chart, {
      type: 'bar',
      data: {
        labels: data.filter((row) => row.count !== 0).map((row) => row.day),
        datasets: [
          {
            label: 'Расход топлива за месяц',
            data: data.filter((row) => row.count !== 0).map((row) => row.count),
          },
        ],
      },
      plugins: [ChartDataLabels],
    });
  }

  countForecast() {
    const inputDistance = document.getElementById('calc__input_distance') as HTMLInputElement;
    const inputAverage = document.getElementById('calc__input_average-expense') as HTMLInputElement;
    const inputPrice = document.getElementById('calc__input_fuel-price') as HTMLInputElement;

    let distance = 0;
    let average = 0;
    let price = 0;

    inputDistance?.addEventListener('input', () => {
      distance = +inputDistance.value;
      this.changeFields(distance, average, price);
    });

    inputAverage?.addEventListener('input', () => {
      average = +inputAverage.value;
      this.changeFields(distance, average, price);
    });

    inputPrice?.addEventListener('input', () => {
      price = +inputPrice.value;
      this.changeFields(distance, average, price);
    });
  }

  changeFields(distance: number, average: number, price: number) {
    const forecastValue = document.getElementById('result-value') as HTMLInputElement;
    const forecastSum = document.getElementById('result-sum') as HTMLInputElement;

    if (distance > 0 && average > 0 && price > 0) {
      forecastValue.innerText = String((distance / average).toFixed(2));
      forecastSum.innerText = String(((distance / average) * price).toFixed(2));
    } else {
      forecastValue.innerText = '0.00';
      forecastSum.innerText = '0.00';
    }
  }

  clearInput() {
    const clearbuttons = document.querySelector('.calc__container');

    clearbuttons?.addEventListener('click', (e) => {
      const currentButton = e.target as HTMLElement;
      const parent = currentButton.closest('.calc__wrap');
      const input = parent?.querySelector('.calc__input') as HTMLInputElement;
      if (input) {
        input.value = '';
      }
    });
  }
}
