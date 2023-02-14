import { IRefuel } from '../../types';
// import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../components/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { getUnits, getMoney } from '../../components/units';
import { carData } from '../../car/car_data';

export class Refuel {
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
    onFocus('refuel');
  }

  changeTotalPriceDetals() {
    console.log(this.tankFullDOM.checked);
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
      onFocus('refuel');
    });
    this.amountFuelDOM.addEventListener('input', () => {
      if (this.priceFuelDOM.value !== '') {
        this.amountPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      }
      onFocus('refuel');
    });
    this.amountPriceDOM.addEventListener('input', () => {
      this.amountFuelDOM.value = String(+this.amountPriceDOM.value / +this.priceFuelDOM.value);
      onFocus('refuel');
    });
  }

  createrefuelEvent() {
    const addrefuelBtn = document.querySelector('#add--event-refuel__btn') as HTMLButtonElement;
    console.log(addrefuelBtn);
    addrefuelBtn.addEventListener('click', (event) => {
      this.initDOM();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;
      console.log(newCarData);
      newCarData.event.refuels.push({
        date: Date.now().toLocaleString(),
        mileage: this.mileageDOM.value,
        priceFuel: this.priceFuelDOM.value,
        amountFuel: this.amountFuelDOM.value,
        amountPrice: this.amountPriceDOM.value,
        isFull: this.tankFullDOM.checked,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      });
      event.preventDefault();
      localStorage.setItem('car', JSON.stringify(newCarData));
      // formDervice.submit();
      console.log(carData.event.refuel);
    });
  }

  createHTMLrefuelDOM() {
    return `<form id="main-form refuel" class="main-form refuel flex flex-col gap-8 justify-between h-80 w-full" action="/" method="put">
    <div class="fuel_container flex justify-between">
      ${lineOfEvent(
        'refuel',
        'type-fuel',
        eventLang().typeFuel,
        icon.gasPump,
        'search',
        '48',
        'yes',
        this.createHTMLDatalistPetrol()
      )}
      ${lineOfEvent('refuel', 'price', eventLang().price, icon.coins, 'text', '48', '', '', getMoney('BY', 'litr'))}
    </div>
        <div id="refuel__previos_container" class="refuel__previos_container flex justify-between">
                ${lineOfEvent('refuel', 'amount-fuel', eventLang().quant, icon.quantFuel, 'text', '48', '', ``)}
                ${lineOfEvent(
                  'refuel',
                  'amount-price',
                  eventLang().amount,
                  icon.wallet,
                  'number',
                  '48',
                  '',
                  '',
                  getMoney('BY')
                )}
        </div>
        <div id="refuel__mileage_container" class="refuel__mileage_container flex justify-between">
          ${lineOfEvent(
            'refuel',
            'mileage',
            eventLang().mileage,
            icon.mileage,
            'number',
            '48',
            '',
            '',
            getUnits().distance
          )}          
          ${lineOfEvent('refuel', 'tank-full', eventLang().tankFull, '', 'checkbox', '48', getUnits().distance)}
        </div>  
                ${lineOfEvent(
                  'refuel',
                  'date',
                  eventLang().date,
                  icon.date,
                  'datetime-local',
                  'full',
                  '',
                  '',
                  '',
                  `${new Date().toISOString().slice(0, 16)}`
                )}
          ${lineOfEvent('refuel', 'place', eventLang().place, icon.place, 'text', 'full')}
          ${lineOfEvent('refuel', 'notes', eventLang().comments, icon.comments, 'text', 'full')}
          ${renderButtonBlue(eventLang().add, 'add--event-refuel__btn', 'add--event-refuel__btn', 100)}
      </form>`;
  }

  createHTMLDatalistPetrol() {
    return `    <option value="Petrol - AI-100">
    <option value="Petrol - AI-98">
    <option value="Petrol - AI-95">
    <option value="Petrol - AI-92">
    <option value="Disel">
    <option value="Gas - propane">
    <option value="Gas - methane">
    <option value="Gas - LNP">`;
  }
}
