/* eslint-disable no-undef */
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
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('statistic');
    fragment.innerHTML = `
      ${this.header}
      <div class="carousel relative">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0">
            <div class="block w-full bg-slate h-10 shadow-md"></div>
            <div class="mb-6 flex justify-center"><canvas id="acquisitions" style="max-width: 250px; max-height: 250px"></canvas></div>
          </div>
          <label for="carousel-3" class="prev control-1 absolute cursor-pointer hidden text-xl hover:text-white hover:bg-blue-700 leading-tight text-center z-10 top-2 left-0 ml-12">Всего</label>
          <label for="carousel-2" class="next control-1 absolute cursor-pointer hidden text-xl hover:text-whitehover:bg-blue-700 leading-tight text-center z-10 top-2 right-0 mr-12">Расход</label>
          
          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0">
            <div class="block h-full w-full bg-blue text-white text-5xl text-center">Slide 2</div>
          </div>
          <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
          <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 
          
          <div class="statistic__legend">
            <div class="statistic__fuels item flex mr-10 ">
              <div class="item__color w-4" style="background-color: rgb(250, 32, 32)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Заправки</div>
                <div class="item__after"><span><span class="item__sum" id="stat1"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex mr-10">
              <div class="item__color w-4" style="background-color: rgb(54, 162, 235)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Сервис</div>
                <div class="item__after"><span><span class="item__sum" id="stat2"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex mr-10">
              <div class="item__color w-4" style="background-color: rgb(255, 205, 86)"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Другие расходы</div>
                <div class="item__after"><span><span class="item__sum" id="stat3"></span>  ₽</span></div>
              </div>
            </div>
            <div class="statistic__fuels item flex">
              <div class="item__color w-4"></div>
              <div class="item__inner flex justify-between w-full pl-2 py-2">
                <div class="item__title">Всего</div>
                <div class="item__after"><span class="item__sum" id="stat4"></span><span id="stat__value">  ₽</span></div>
              </div>
            </div>
          </div>
        </div>
    </div>
      
    `;
    this.parent.append(fragment);
  }

  async createDoughnutChart(data: number[]) {
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
            data: data,
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
}
