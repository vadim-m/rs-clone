import { IRefuel } from '../../types';
// import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
// import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
// import { getUnits, getMoney } from '../../components/units';
import { carData } from '../../car/car_data';
import { paramsCollectionRefuel } from './paramsForLineEvent';
// import { getDateTime } from '../../components/getDateTimeFunc';
// import { createHTMLDatalistFuel } from './datalist';

export class Refuel {
  eventPage = 'refuel';
  refuelEvent: IRefuel | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;

  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;

  page!: HTMLElement;

  totalPriceTitle!: HTMLElement;
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
    // this.createrefuelEvent();
  }

  initDOM() {
    this.typeDOM = document.querySelector('#refuel__input_type-fuel') as HTMLInputElement;
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.amountPriceDOM = document.querySelector('#refuel__input_amount-price') as HTMLInputElement;
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
    this.amountPriceDOM = document.querySelector('#refuel__input_amount-price') as HTMLInputElement;
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

  createrefuelEvent() {
    const addrefuelBtn = document.querySelector('#add--event-refuel__btn') as HTMLButtonElement;
    console.log(addrefuelBtn);
    addrefuelBtn.addEventListener('click', (event) => {
      this.initDOM();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;
      this.refuelEvent = {
        date: Date.now().toLocaleString(),
        mileage: +this.mileageDOM.value,
        priceFuel: +this.priceFuelDOM.value,
        amountFuel: +this.amountFuelDOM.value,
        amountPrice: +this.amountPriceDOM.value,
        isFull: this.tankFullDOM.checked,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      newCarData.event.refuels.push(this.refuelEvent);
      event.preventDefault();
      localStorage.setItem('car', JSON.stringify(newCarData));
      // formDervice.submit();
      console.log(carData.event.refuel);
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
