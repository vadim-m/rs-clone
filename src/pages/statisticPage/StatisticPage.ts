import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartItem } from 'chart.js/dist/types/index';
import { StatisticHeader } from './StatisticHeader';
import { StatisticChart1 } from './StatisticChart1';
import { StatisticChart2 } from './StatisticChart2';
import { eventLang } from '../../lang/addEventLang';
import { ICarData, IOther, IRefuel, IService } from '../../types';
import { getCarFromLS } from '../../helpers/localStorage';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */

Chart.defaults.color = '#fff';
Chart.defaults.font.size = 16;

export class StatisticPage {
  parent: HTMLElement;
  private header = new StatisticHeader().element;
  private chart1 = new StatisticChart1().element;
  private chart2 = new StatisticChart2().element;
  addEventCircule: HTMLElement;
  startPeriodDate: number | null;
  endPeriodDate: number | null;
  carData: ICarData | null;
  refuels: IRefuel[] | [];
  services: IService[] | [];
  others: IOther[] | [];
  myChart: Chart | null;
  chartId: string | null;
  myChartRefuels: Chart | null;
  chartRefuelId: string | null;

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
    this.countForecast();
    this.submitPeriod();
    this.myChart = null;
    this.chartId = null;
    this.myChartRefuels = null;
    this.chartRefuelId = null;
    this.fillDoughnutChart();
  }

  async fillDoughnutChart() {
    const startDate = this.startPeriodDate;
    const endDate = this.endPeriodDate;

    const refuelsArr = [...this.refuels];
    let refuelsExpenses = refuelsArr.reduce((acc: number, item: IRefuel) => acc + Number(item.totalPrice), 0);
    const servicesArr = [...this.services];
    let servicesExpenses = servicesArr.reduce((acc: number, item: IService) => acc + Number(item.totalPrice), 0);
    const othersArr = [...this.others];
    let othersExpenses = othersArr.reduce((acc: number, item: IOther) => acc + Number(item.totalPrice), 0);

    if (startDate && endDate && startDate > endDate) {
      alert('StartDate > EndDate');
      return;
    } else if (!startDate && !endDate) {
      await this.createDoughnutChart([refuelsExpenses, servicesExpenses, othersExpenses]);
      await this.createBarChart(refuelsArr);
    } else {
      const filteredRefuelsArr = refuelsArr.filter(
        (item: IRefuel) => +Date.parse(item.date) >= startDate! && +Date.parse(item.date) <= endDate!
      );
      refuelsExpenses = filteredRefuelsArr.reduce((acc: number, item: IRefuel) => acc + Number(item.totalPrice), 0);

      const filteredServicesArr = servicesArr.filter(
        (item: IService) => +Date.parse(item.date) >= startDate! && +Date.parse(item.date) <= endDate!
      );
      servicesExpenses = filteredServicesArr.reduce((acc: number, item: IService) => acc + Number(item.totalPrice), 0);

      const filteredOthersArr = othersArr.filter(
        (item: IOther) => +Date.parse(item.date) >= startDate! && +Date.parse(item.date) <= endDate!
      );
      othersExpenses = filteredOthersArr.reduce((acc: number, item: IOther) => acc + Number(item.totalPrice), 0);

      this.updatePeriodMileage(filteredRefuelsArr, filteredServicesArr, filteredOthersArr);
      await this.createDoughnutChart([refuelsExpenses, servicesExpenses, othersExpenses]);
      await this.createBarChart(filteredRefuelsArr);
    }
  }

  async createDoughnutChart(givenData: number[]) {
    if (this.chartId !== null) {
      this.myChart?.destroy();
    }

    const chart = document.getElementById('acquisitions') as ChartItem;

    const textCenter = {
      id: 'textCenter',
      afterDatasetsDraw(chart: Chart) {
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
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

    this.myChart = new Chart(chart, {
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

    this.chartId = this.myChart.id;

    const stat1 = document.getElementById('stat1') as HTMLElement;
    const stat2 = document.getElementById('stat2') as HTMLElement;
    const stat3 = document.getElementById('stat3') as HTMLElement;
    const stat4 = document.getElementById('stat4') as HTMLElement;
    stat4.style.color = '#white';
    stat1.innerText = String(this.myChart?.data?.datasets[0]?.data[0]);
    stat2.innerText = String(this.myChart?.data?.datasets[0]?.data[1]);
    stat3.innerText = String(this.myChart?.data?.datasets[0]?.data[2]);
    stat4.innerText = String(this.myChart?.data?.datasets[0]?.data?.reduce((a, b) => Number(a) + Number(b)));
  }

  async createBarChart(list: IRefuel[]) {
    if (this.chartRefuelId !== null) {
      this.myChartRefuels?.destroy();
    }

    type IData = {
      day: string;
      count: number;
    };

    const arr = list;
    const data: IData[] = [];
    arr.forEach((item) => {
      data.push({ day: item.date.slice(0, 10), count: +item.amountFuel });
    });

    const chart = document.getElementById('bar-chart') as ChartItem;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.myChartRefuels = new Chart(chart, {
      type: 'bar',
      data: {
        labels: data.filter((row) => row.count !== 0).map((row) => row.day),
        datasets: [
          {
            label: '',
            backgroundColor: 'rgb(129, 144, 178)',
            data: data.filter((row) => row.count !== 0).map((row) => row.count),
          },
        ],
      },
      plugins: [ChartDataLabels],
    });

    this.chartRefuelId = this.myChartRefuels.id;
  }

  updatePeriodMileage(refuels: IRefuel[], services: IService[], others: IOther[]) {
    const periodMileageEl = document.querySelector('#chart__distance_period') as HTMLSpanElement;
    if (periodMileageEl) {
      const arrOfEvents = new Set(
        [...refuels, ...services, ...others].map((item: IRefuel | IService | IOther) => +item.mileage)
      );

      const min = Math.min(...arrOfEvents);
      const max = Math.max(...arrOfEvents);
      const mileage = max - min;
      periodMileageEl.textContent = String(mileage);
    }
  }

  submitPeriod() {
    const form = document.getElementById('calendar-form');
    const beforeInput = document.getElementById('calendar-before') as HTMLInputElement;
    const afterInput = document.getElementById('calendar-after') as HTMLInputElement;

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startPeriodDate = Date.parse(beforeInput.value);
      this.endPeriodDate = Date.parse(afterInput.value);
      this.fillDoughnutChart();
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

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('statistic');
    fragment.innerHTML = `
      ${this.header}
      <div class="item-content item-link flex justify-between p-4 border-b border-t border-slate">
        <div class="item-title item-info flex flex-col items-center text-lg">
          <div class="item-header">${eventLang().totalMileage}</div>
          <span class="item-title"><span class="chart_distance">${this.carData?.indicators.curMileage}</span> км.</span>
        </div>
        <div class="item-title item-info  flex flex-col items-center text-lg">
          <div class="item-header">${eventLang().perPeriodMileage}</div>
          <span class="item-title"><span id="chart__distance_period"> -- | -- </span> км.</span>
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
}
