import { ICarData, IRefuel } from '../../types';
import { lastEvent, updateIndicatirs } from '../../utilits/mathSpend';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { carData } from '../../car/car_data';
import { paramsCollectionRefuel } from './paramsForLineEvent';

export class Refuel {
  eventPage = 'refuel';
  refuelEvent: IRefuel | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  parent!: HTMLElement;
  addEventCircule!: HTMLElement;
  priceFuelDOM!: HTMLInputElement;
  amountFuelDOM!: HTMLInputElement;
  amountPriceDOM!: HTMLInputElement;
  tankFullDOM!: HTMLInputElement;
  allInput!: NodeList;
  dateDOM!: HTMLInputElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.changeTotalPriceDetals();
    this.createRefuelEvent();
  }

  initDOM() {
    this.typeDOM = document.querySelector('#refuel__input_type-fuel') as HTMLInputElement;
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.amountPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
    this.mileageDOM = document.querySelector('#refuel__input_mileage') as HTMLInputElement;
    this.tankFullDOM = document.querySelector('#refuel__input_tank-full') as HTMLInputElement;
    this.placeDOM = document.querySelector('#refuel__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#refuel__input_notes') as HTMLInputElement;
    this.dateDOM = document.querySelector('#refuel__input_date') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.refuel__input') as NodeList;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLrefuelDOM());
    onFocus(this.eventPage);
  }

  changeTotalPriceDetals() {
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.amountPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
    this.priceFuelDOM.addEventListener('input', () => {
      if (this.amountPriceDOM.value !== '') {
        this.amountFuelDOM.value = String(+this.amountPriceDOM.value / +this.priceFuelDOM.value);
        if (this.priceFuelDOM.value === '') {
          this.amountFuelDOM.value = '';
        }
      }
      onFocus(this.eventPage);
    });
    this.amountFuelDOM.addEventListener('input', () => {
      if (this.priceFuelDOM.value !== '') {
        this.amountPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      }
      onFocus(this.eventPage);
    });
    this.amountPriceDOM.addEventListener('input', () => {
      this.amountFuelDOM.value = String(+this.amountPriceDOM.value / +this.priceFuelDOM.value);
      onFocus(this.eventPage);
    });
  }

  spendFuelTotal(carData: ICarData): number {
    const spendFuelTotal: number = carData.event.refuel.reduce((acc, e) => {
      return acc + e.amountFuel;
    }, 0);
    return spendFuelTotal;
  }

  culcConsumption(carData: ICarData) {
    const curSpendFuel = carData.event.refuel[carData.event.refuel.length - 1].amountFuel;
    const fullTankCheckArr = carData.event.refuel.filter((e) => e.isFull === true); // все заправки с полным баком

    if (fullTankCheckArr.length > 1) {
      const lastFullTankEvent = fullTankCheckArr.slice(-2)[0];
      const currentFullTankEvent = fullTankCheckArr.slice(-2)[1];
      const lastLostFuel = currentFullTankEvent.totalSpendFuel - lastFullTankEvent.totalSpendFuel;
      const lastRoute = currentFullTankEvent.mileage - lastFullTankEvent.mileage;
      carData.indicators.curConsumptionFuel = lastLostFuel / (lastRoute / 100);
      if (carData.info.sizeTank && carData.info.startFuel) {
        const allLostFuel = carData.indicators.spendFuelTotal - (carData.info.sizeTank - carData.info.startFuel);
        carData.indicators.totalConsumptionFuel = +(allLostFuel / (carData.indicators.myMileageTotal / 100)).toFixed(2);
      }
    } else {
      if (carData.info.sizeTank && carData.info.startFuel) {
        if (fullTankCheckArr.length === 1) {
          const allLostFuel = carData.indicators.spendFuelTotal - (carData.info.sizeTank - carData.info.startFuel);
          carData.indicators.totalConsumptionFuel = +(allLostFuel / (carData.indicators.myMileageTotal / 100)).toFixed(
            2
          );
          carData.indicators.curConsumptionFuel = carData.indicators.totalConsumptionFuel;
        } else {
          carData.indicators.totalConsumptionFuel = +(
            (carData.indicators.spendFuelTotal - curSpendFuel + carData.info.startFuel) /
            (carData.indicators.myMileageTotal / 100)
          ).toFixed(2);
          carData.indicators.curConsumptionFuel = carData.indicators.totalConsumptionFuel;
        }
      }
      carData.indicators.totalConsumptionFuel = +(
        (carData.indicators.spendFuelTotal - curSpendFuel) /
        (carData.indicators.myMileageTotal / 100)
      ).toFixed(2);
      carData.indicators.curConsumptionFuel = carData.indicators.totalConsumptionFuel;
    }
  }

  createRefuelEvent() {
    const addrefuelBtn = document.querySelector('#add--event-refuel__btn') as HTMLButtonElement;

    addrefuelBtn.addEventListener('click', (event) => {
      this.initDOM();
      const newCarData: ICarData = localStorage.getItem('car')
        ? JSON.parse(localStorage.getItem('car') as string)
        : carData;
      lastEvent(this.eventPage, newCarData); // обновляем последние события eventTime

      this.refuelEvent = {
        date: this.dateDOM.value,
        mileage: +this.mileageDOM.value,
        priceFuel: +this.priceFuelDOM.value,
        amountFuel: +this.amountFuelDOM.value,
        amountPrice: +this.amountPriceDOM.value,
        totalSpendFuel: this.spendFuelTotal(newCarData),
        isFull: this.tankFullDOM.checked,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      newCarData.event.refuel.push(this.refuelEvent); // добавляем заправку в event

      updateIndicatirs(this.eventPage, newCarData); // обновляем все индикаторы
      this.culcConsumption(newCarData); // только для заправки

      localStorage.setItem('car', JSON.stringify(newCarData)); // обновляем полностью carData
      event.preventDefault();
    });
  }

  createHTMLrefuelDOM() {
    return `
        <h2 class="events__title font-bold text-xl mb-7">${eventLang().refuel}</h2> 
    <form id="main-form refuel" class="main-form refuel grid grid-cols-2 gap-8 h-[32rem] w-full" action="/" method="put">
          ${paramsCollectionRefuel
            .map((obj) => {
              return lineOfEvent(this.eventPage, obj);
            })
            .join('')}
          ${renderButtonBlue(eventLang().add, 'add--event-refuel__btn col-span-2', 'add--event-refuel__btn', 'full')}
      </form>`;
  }
}
