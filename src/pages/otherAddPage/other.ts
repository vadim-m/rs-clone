import { IOther } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../components/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { getMoney, getUnits } from '../../components/units';
import { getDateTime } from '../../components/getDateTimeFunc';
import { createHTMLDatalistOthersName } from './datalist';

export class Other {
  otherEvent: IOther | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  dateDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  formother!: HTMLFormElement;
  page!: HTMLElement;

  totalPriceTitle!: HTMLElement;
  parent!: HTMLElement;
  pageBody!: HTMLElement;
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
    this.pageBody = document.querySelector('body') as HTMLElement;
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
    onFocus('other');
  }

  createotherEvent() {
    const addOtherBtn = document.querySelector('#add--event-other__btn') as HTMLButtonElement;
    console.log(addOtherBtn);
    addOtherBtn.addEventListener('click', (event) => {
      this.initDOM();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;

      this.otherEvent = {
        date: new Date().toLocaleString(),
        mileage: +this.mileageDOM.value,
        name: this.nameDOM.value,
        totalPrice: +this.totalPriceDOM.value,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      newCarData.event.others.push(this.otherEvent);
      event.preventDefault();
      localStorage.setItem('car', JSON.stringify(newCarData));
    });
  }

  createHTMLOtherDOM() {
    return `
    <h2 class="events__title font-bold text-xl mb-7">${eventLang().other}</h2> 
    <form id="main-form other" class="main-form other flex flex-col gap-8 justify-between h-[35rem] w-full" action="/" method="put">
      ${lineOfEvent(
        'other',
        'name',
        eventLang().name,
        icon.pen,
        'search',
        'full',
        'require',
        createHTMLDatalistOthersName()
      )}
        ${lineOfEvent('other', 'total', eventLang().cost, icon.wallet, 'number', 'full', '', '', getMoney('BY'))}
        ${lineOfEvent('other', 'mileage', eventLang().mileage, icon.mileage, 'text', 'full', getUnits().distance)} 
        ${lineOfEvent(
          'other',
          'date',
          eventLang().date,
          icon.date,
          'datetime-local',
          'full',
          '',
          '',
          '',
          getDateTime()
        )}

          ${lineOfEvent('refuel', 'place', eventLang().place, icon.place, 'text', 'full')}
          ${lineOfEvent('other', 'notes', eventLang().comments, icon.comments, 'text', '1/2')}
          ${renderButtonBlue(eventLang().addEvent, 'add--event-other__btn', 'add--event-other__btn', 100)}
      </form>`;
  }
}
