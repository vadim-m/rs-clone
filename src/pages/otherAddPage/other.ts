import { ICarData, IOther } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { paramsCollectionOther } from './paramsForLineEvent';
import { lastEvent, updateIndicatirs } from '../../utilits/mathSpend';

export class Other {
  eventPage = 'other';

  otherEvent: IOther | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  dateDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  parent!: HTMLElement;
  allInput!: NodeList;
  addEventCircule!: HTMLElement;
  totalPriceDOM!: HTMLInputElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.createotherEvent();
  }

  initDOM() {
    this.nameDOM = document.querySelector('#other__input_name') as HTMLInputElement;
    this.dateDOM = document.querySelector('#other__input_date') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#other__input_total') as HTMLInputElement;
    this.mileageDOM = document.querySelector('#other__input_mileage') as HTMLInputElement;
    this.placeDOM = document.querySelector('#other__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#other__input_notes') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.other__input') as NodeList;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLOtherDOM());
    onFocus(this.eventPage);
  }

  createotherEvent() {
    const addOtherBtn = document.querySelector('#add--event-other__btn') as HTMLButtonElement;

    addOtherBtn.addEventListener('click', (event) => {
      this.initDOM();

      const newCarData: ICarData = localStorage.getItem('car')
        ? JSON.parse(localStorage.getItem('car') as string)
        : carData;
      lastEvent(this.eventPage, newCarData); // обновляем последние события eventTime

      this.otherEvent = {
        date: this.dateDOM.value,
        mileage: +this.mileageDOM.value,
        name: this.nameDOM.value,
        totalPrice: +this.totalPriceDOM.value,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      newCarData.event.others.push(this.otherEvent);

      updateIndicatirs(this.eventPage, newCarData); // обновляем все индикаторы

      localStorage.setItem('car', JSON.stringify(newCarData));
      event.preventDefault();
    });
  }

  createHTMLOtherDOM() {
    return `
    <h2 class="events__title font-bold text-xl mb-7">${eventLang().other}</h2> 
    <form id="main-form other" class="main-form other grid grid-cols-2 gap-8 h-[35rem]" action="/" method="put">
    ${paramsCollectionOther
      .map((obj) => {
        return lineOfEvent(this.eventPage, obj);
      })
      .join('')}
          ${renderButtonBlue(eventLang().addEvent, 'add--event-other__btn col-span-2', 'add--event-other__btn', 'full')}

      </form>`;
  }
}
