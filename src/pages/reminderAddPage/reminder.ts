import { ICarData, IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { paramsCollectionReminder } from './paramsForLineEvent';

export class Reminder {
  eventPage = 'reminder';
  reminderEvent: IReminders | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  formReminder!: HTMLFormElement;
  page!: HTMLElement;

  totalPriceTitle!: HTMLElement;
  parent!: HTMLElement;
  pageBody!: HTMLElement;
  allInput!: NodeList;
  addEventCircule!: HTMLElement;
  previosDateDOM!: HTMLInputElement;
  previosMileageDOM!: HTMLInputElement;
  previosOnMileageDOM!: HTMLInputElement;
  previosAfterMileageDOM!: HTMLInputElement;
  previosOnDateDOM!: HTMLInputElement;
  previosAfterDateDOM!: HTMLInputElement;
  previosRepeatTimeDOM!: HTMLInputElement;
  previosRepeatMileageDOM!: HTMLInputElement;
  carData: ICarData;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.carData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;
    this.createReminderEvent();
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.typeDOM = document.querySelector('#reminder__input_type') as HTMLInputElement;
    this.nameDOM = document.querySelector('#reminder__input_name') as HTMLInputElement;
    this.previosDateDOM = document.querySelector('#reminder__input_previos-date') as HTMLInputElement;
    this.previosMileageDOM = document.querySelector('#reminder__input_previos-mileage') as HTMLInputElement;
    this.previosOnMileageDOM = document.querySelector('#reminder__input_on-mileage') as HTMLInputElement;
    this.previosAfterMileageDOM = document.querySelector('#reminder__input_after-mileage') as HTMLInputElement;
    this.previosOnDateDOM = document.querySelector('#reminder__input_on-date') as HTMLInputElement;
    this.previosAfterDateDOM = document.querySelector('#reminder__input_after-date') as HTMLInputElement;
    this.previosRepeatTimeDOM = document.querySelector('#reminder__input_repeat-time') as HTMLInputElement;
    this.previosRepeatMileageDOM = document.querySelector('#reminder__input_repeat-mileage') as HTMLInputElement;
    this.notesDOM = document.querySelector('#reminder__input_notes') as HTMLInputElement;

    this.allInput = document.querySelectorAll('.reminder__input') as NodeList;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLreminderDOM());
    onFocus(this.eventPage);
  }

  createReminderEvent() {
    const addReminderBtn = document.querySelector('#add--event-reminder__btn') as HTMLButtonElement;
    console.log(addReminderBtn);
    addReminderBtn.addEventListener('click', (event) => {
      this.initDOM();

      this.reminderEvent = {
        type: this.typeDOM.value,
        name: this.nameDOM.value,
        previosDate: this.previosDateDOM.value,
        previosMileage: this.previosMileageDOM.value,
        rememberOnMilege: this.previosOnMileageDOM.value,
        rememberAfterMilege: this.previosAfterMileageDOM.value,
        rememberOnDate: this.previosOnDateDOM.value,
        rememberAfteDate: this.previosAfterDateDOM.value,
        repeatTime: this.previosRepeatTimeDOM.value,
        repeatMileage: this.previosRepeatMileageDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      this.carData.event.reminders.push(this.reminderEvent);
      localStorage.setItem('car', JSON.stringify(this.carData));
      event.preventDefault();
    });
  }

  createHTMLreminderDOM() {
    return `
            <h2 class="events__title font-bold text-xl mb-7">${eventLang().reminder}</h2> 
    <form id="main-form reminder" class="main-form reminder grid grid-cols-2 gap-8 justify-between h-80" action="/" method="put">

                ${paramsCollectionReminder
                  .map((obj) => {
                    return lineOfEvent(this.eventPage, obj);
                  })
                  .join('')}
          ${renderButtonBlue(
            eventLang().addReminder,
            'add--event-reminder__btn col-span-2',
            'add--event-reminder__btn',
            'full'
          )}
      </form>`;
  }
}
