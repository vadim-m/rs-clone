import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartItem } from 'chart.js/dist/types/index';
import { StatisticHeader } from './StatisticHeader';
import { StatisticChart1 } from './StatisticChart1';
import { StatisticChart2 } from './StatisticChart2';
import { eventLang } from '../../lang/addEventLang';
import { ICarData, IOther, IRefuel, IService } from '../../types';
import { getCarFromLS } from '../../helpers/localStorage';

Chart.defaults.color = '#fff';
Chart.defaults.font.size = 16;

export class StatisticPage {
  parent: HTMLElement;
  private header = new StatisticHeader().element;
  private chart1 = new StatisticChart1().element;
  private chart2 = new StatisticChart2().element;
  addEventCircule: HTMLElement;
  startPeriodDate: string | null;
  endPeriodDate: string | null;
  carData: ICarData | null;
  refuels: IRefuel[] | [];
  services: IService[] | [];
  others: IOther[] | [];

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.startPeriodDate = null;
    this.endPeriodDate = null;
    this.carData = getCarFromLS();
    this.refuels = this.carData?.event.refuel ?? [];
    this.services = this.carData?.event.service ?? [];
    this.others = this.carData?.event.others ?? [];
    this.createElement();
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.classList.remove('hidden__menu');
    this.createDoughnutChart([3000, 5000, 1000]);
    this.fillDoughnutChart();
    this.createBarChart();
    this.countForecast();
    this.submitPeriod();
  }

  fillDoughnutChart() {
    if (!this.startPeriodDate && !this.endPeriodDate) {
      const refuelsFrr = [...this.refuels];
      const refuelsExpenses = refuelsFrr.reduce((acc: number, item: IRefuel) => acc + Number(item.totalPrice), 0);
      const servicessFrr = [...this.services];
      const servicesExpenses = servicessFrr.reduce((acc: number, item: IService) => acc + Number(item.totalPrice), 0);
      const othersFrr = [...this.others];
      const othersExpenses = othersFrr.reduce((acc: number, item: IOther) => acc + Number(item.totalPrice), 0);

      console.log(refuelsExpenses, servicesExpenses, othersExpenses);
      this.createDoughnutChart([refuelsExpenses, servicesExpenses, othersExpenses]);
    }
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('statistic');
    fragment.innerHTML = `
      ${this.header}
      <div class="item-content item-link flex justify-between p-4 border-b border-t border-slate">
        <div class="item-title item-info flex flex-col items-center text-lg">
          <div class="item-header">${eventLang().totalMileage}</div>
          <span class="item-title"><span class="chart_distance">91 158</span>  км.</span>
        </div>
        <div class="item-title item-info  flex flex-col items-center text-lg">
          <div class="item-header">${eventLang().perPeriodMileage}</div>
          <span class="item-title"><span id="chart__distance_period">27 858</span> км.</span>
        </div>
      </div>
      <div class="carousel relative">
        <div class="carousel-inner relative w-full">
           ${this.chart1}
           ${this.chart2}
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
        ctx.font = '1.5rem sans-serif';
        ctx.fillStyle = '#62729f';
        ctx.fillText(`${sum}${currency}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
        ctx.lineWidth = 6;
      },
    };

    const myChart = new Chart(chart, {
      type: 'doughnut',

      data: {
        datasets: [
          {
            data: givenData,
            backgroundColor: ['#FA2020', '#36A2EB', '#FFCD56'],
            borderColor: '#fff',
            hoverOffset: 8,
          },
        ],
      },
      plugins: [ChartDataLabels, textCenter],
    });

    const stat1 = document.getElementById('stat1') as HTMLElement;
    const stat2 = document.getElementById('stat2') as HTMLElement;
    const stat3 = document.getElementById('stat3') as HTMLElement;
    const stat4 = document.getElementById('stat4') as HTMLElement;
    stat4.style.color = '#white';
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
            label: '',
            backgroundColor: 'rgba(255, 205, 86, 1)',
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

  submitPeriod() {
    const form = document.getElementById('calendar-form');
    const beforeInput = document.getElementById('calendar-before') as HTMLInputElement;
    const afterInput = document.getElementById('calendar-after') as HTMLInputElement;

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(beforeInput.value, afterInput.value);
    });
  }
}
