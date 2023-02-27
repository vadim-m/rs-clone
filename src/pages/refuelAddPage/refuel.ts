import { ICarData, IRefuel } from '../../types';
import { culcMaybeMileage, culcSpendFuelTotal } from '../../utilits/mathSpend';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { carData } from '../../car/car_data';
import { paramsCollectionRefuel } from './paramsForLineEvent';
import { updateCarData } from '../../utilits/updateCarData';
import { changeMileage } from '../../utilits/validMileage';

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
  totalPriceDOM!: HTMLInputElement;
  tankFullDOM!: HTMLInputElement;
  allInput!: NodeList;
  dateDOM!: HTMLInputElement;
  formDOM!: HTMLFormElement;
  carData: ICarData;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.changeTotalPriceDetals();
    this.carData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;
    culcMaybeMileage(this.eventPage, this.carData);
    changeMileage(this.eventPage, this.carData);
    this.createRefuelEvent();
    onFocus(this.eventPage);
  }

  initDOM() {
    this.formDOM = document.querySelector('#main-form') as HTMLFormElement;
    this.typeDOM = document.querySelector('#refuel__input_type-fuel') as HTMLInputElement;
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
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
  }

  changeTotalPriceDetals() {
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
    this.priceFuelDOM.addEventListener('input', () => {
      if (this.totalPriceDOM.value !== '') {
        this.amountFuelDOM.value = String(+this.totalPriceDOM.value / +this.priceFuelDOM.value);
        if (this.priceFuelDOM.value === '') {
          this.amountFuelDOM.value = '';
        }
      }
      this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      onFocus(this.eventPage);
    });
    this.amountFuelDOM.addEventListener('input', () => {
      if (this.priceFuelDOM.value !== '') {
        this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      }
      this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      onFocus(this.eventPage);
    });
    this.amountFuelDOM.addEventListener('change', () => {
      if (this.amountFuelDOM.value !== '') {
        this.priceFuelDOM.value = String(+this.totalPriceDOM.value / +this.amountFuelDOM.value);
      }
      onFocus(this.eventPage);
    });

    this.totalPriceDOM.addEventListener('input', () => {
      this.amountFuelDOM.value = String(+this.totalPriceDOM.value / +this.priceFuelDOM.value);
      onFocus(this.eventPage);
    });
  }

  createRefuelEvent() {
    const addrefuelBtn = document.querySelector('#add--event-refuel__btn') as HTMLButtonElement;

    addrefuelBtn.addEventListener('click', () => {
      this.initDOM();
      const newCarData: ICarData = localStorage.getItem('car')
        ? JSON.parse(localStorage.getItem('car') as string)
        : carData;

      this.refuelEvent = {
        date: this.dateDOM.value,
        mileage: this.mileageDOM.value,
        name: this.typeDOM.value,
        priceFuel: this.priceFuelDOM.value,
        amountFuel: this.amountFuelDOM.value,
        totalPrice: this.totalPriceDOM.value,
        totalSpendFuel: culcSpendFuelTotal(newCarData),
        isFull: this.tankFullDOM.checked,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
        typeEvent: this.eventPage,
      };
      const eventArr = newCarData.event.refuel;
      if (Array.from(this.allInput).every((e) => (e as HTMLInputElement).checkValidity())) {
        updateCarData(newCarData, this.eventPage, eventArr, this.refuelEvent);
      }
    });
  }

  createHTMLrefuelDOM() {
    return `
        <h2 class="events__title font-bold text-xl mb-7">${eventLang().refuel}</h2> 
          <form id="main-form refuel" class="main-form refuel grid grid-cols-2 gap-y-8 gap-x-14 justify-center h-[32rem] w-full" action="/" method="put">
          ${paramsCollectionRefuel
            .map((obj) => {
              return lineOfEvent(this.eventPage, obj);
            })
            .join('')}
          ${renderButtonBlue(
            eventLang().add,
            'add--event-refuel__btn col-span-2 dark:bg-slate-600 ml-4',
            'add--event-refuel__btn',
            'full'
          )}
          </form>`;
  }
}
