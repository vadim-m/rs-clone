import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartItem } from 'chart.js/dist/types/index';
import { StatisticHeader } from './StatisticHeader';

export class StatisticPage {
  parent: HTMLElement;
  private header = new StatisticHeader().element;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.createDoughnutChart([3000, 5000, 1000]);
    this.createBarChart();
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('statistic');
    fragment.innerHTML = `
      ${this.header}
      <div class="item-content item-link flex justify-between p-4 border-b border-t border-slate">
        <div class="item-title item-info flex flex-col items-center text-lg">
          <div class="item-header">Общий пробег:</div>
          <span class="item-title"><span class="chart_probeg">91 158</span>  км.</span>
        </div>
        <div class="item-title item-info  flex flex-col items-center text-lg">
          <div class="item-header">Пробег за период:</div>
          <span class="item-title"><span id="chart_probeg_period">27 858</span> км.</span>
        </div>
      </div>
      <div class="carousel relative">
        <div class="carousel-inner relative w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0">
            <div class="block w-full bg-slate h-10 shadow-md"></div>
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
              <div><span class="text-xl" id="probeg__wallet">0.25</span><span class="probeg__currency"> ₽/км.</span></div>
            </div>
          </div>
        </div>
            
  </div>
          
          <label for="carousel-3" class="prev control-1 absolute hidden text-xl leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
          <label for="carousel-2" class="next control-1 absolute cursor-pointer hidden text-xl text-blue hover:text-white leading-tight text-center z-10 top-2 right-0 mr-12">Расход</label>
          
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 hidden pb-20">
            <div class="block w-full bg-slate h-10 shadow-md"></div>
            <div class="mb-6 flex justify-center border-b pb-2 border-slate"><canvas id="bar-chart" style="min-width: 250px; min-height: 250px"></canvas></div>
            <div class="statistic__average-expense text-right border-b pb-2 border-slate">
              Средний расход: <span>8.1</span> л/100км.<br>
              Мин: <span>5.7</span> Макс: <span>15.6</span> л/100км.<br>
              Последний расход: <span>9.2</span> л/100км.<br>
            </div>

            <div class="block-title no-margin-top calc">Калькулятор расхода топлива</div>
            <div class="list no-hairlines-md calc">
          <ul>
            <li class="item-content item-input item-input-with-value">
              <div class="item-inner">
                <div class="item-title item-label">Средний расход, л/100км.</div>
                <div class="item-input-wrap">
                  <input type="number" inputmode="decimal" step="0.01" class="calc_average_expense input-with-value" placeholder="Средний расход" validate="">
                  <span class="input-clear-button"></span>
                </div>
              </div>
            </li>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Расстояние, км.</div>
                <div class="item-input-wrap">
                  <input type="number" inputmode="decimal" step="0.001" class="calc_probeg" placeholder="Расстояние" validate=""> <span class="input-clear-button"></span> </div>
              </div>
            </li>
            <li class="item-content item-input item-input-with-value">
              <div class="item-inner">
                <div class="item-title item-label">Цена, ₽/л</div>
                <div class="item-input-wrap">
                  <input type="number" inputmode="decimal" step="0.01" class="calc_fuel_price input-with-value" placeholder="Цена" validate=""> <span class="input-clear-button"></span> </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="block-title calc">Расчет</div>
        <div class="list calc">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title"><div class="item-header">Прогноз расхода топлива</div> <span class="calc-result-value">0.00</span> <span>л</span></div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-title"><div class="item-header">Стоимость топлива</div> <span class="calc-result-sum">0.00</span> ₽ </div>
                </div>
              </div>
            </li>
          </ul>

        </div>

          </div>
          <label for="carousel-1" class="prev control-2 absolute cursor-pointer hidden text-xl text-blue hover:text-white leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
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
    });
  }
}
