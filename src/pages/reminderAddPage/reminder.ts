import { IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../components/onFocusFunc';
import { renderButtonBlue } from '../../components/button';
import { getUnits } from '../../components/units';

export class Reminder {
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

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
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
    onFocus('reminder');
  }

  createReminderEvent() {
    const addReminderBtn = document.querySelector('#add--event-reminder__btn') as HTMLButtonElement;
    console.log(addReminderBtn);
    addReminderBtn.addEventListener('click', (event) => {
      this.initDOM();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;
      console.log(newCarData);
      newCarData.event.reminders.push({
        type: this.typeDOM.value,
        name: this.nameDOM.value,
        previosDate: this.nameDOM.value,
        previosMileage: this.nameDOM.value,
        rememberOnMilege: this.nameDOM.value,
        rememberAfterMilege: this.nameDOM.value,
        rememberOnDate: this.nameDOM.value,
        rememberAfteDate: this.nameDOM.value,
        repeatTime: this.nameDOM.value,
        repeatMileage: this.nameDOM.value,
        notes: this.nameDOM.value,
        id: Date.now().toString(),
      });
      event.preventDefault();
      localStorage.setItem('car', JSON.stringify(newCarData));
      // formDervice.submit();
      console.log(carData.event.reminders);
    });
  }

  createHTMLreminderDOM() {
    return `<form id="main-form reminder" class="main-form reminder flex flex-col gap-8 justify-between h-80" action="/" method="put">
      ${lineOfEvent('reminder', 'type', eventLang().type, icon.gear, 'text', 'full')}
      ${lineOfEvent('reminder', 'name', eventLang().name, icon.pen, 'text', 'full')}
        <div id="reminder__previos_container" class="reminder__previos_container flex justify-between">
                ${lineOfEvent(
                  'reminder',
                  'previos-date',
                  eventLang().previosDate,
                  icon.date,
                  'datetime-local',
                  '48',
                  '',
                  `${new Date().toISOString().slice(0, 16)}`
                )}
                ${lineOfEvent('reminder', 'previos-mileage', eventLang().previosMileage, icon.mileage, 'number', '1/2')}
        </div>
        <div id="reminder__mileage_container" class="reminder__mileage_container flex justify-between">
          ${lineOfEvent(
            'reminder',
            'on-mileage',
            eventLang().onMileage,
            icon.mileage,
            'text',
            '48',
            getUnits().distance
          )}          
          ${lineOfEvent('reminder', 'after-mileage', eventLang().afterMileage, '', 'text', '48', getUnits().distance)}
        </div>  
                <div id="reminder__date_container" class="reminder__date_container flex justify-between">
          ${lineOfEvent('reminder', 'on-date', eventLang().onDate, icon.date, 'date', '1/2')}          
          ${lineOfEvent('reminder', 'after-date', eventLang().afterDate, '', 'text', '1/2')}
        </div> 
        <div id="reminder__repeat_container" class="reminder__retry_container flex justify-between">
          ${lineOfEvent('reminder', 'repeat-time', eventLang().repeatTime, icon.repeat, 'date', '1/2')}          
          ${lineOfEvent(
            'reminder',
            'repeat-mileage',
            eventLang().repeatMileage,
            '',
            'text',
            '1/2',
            getUnits().distance
          )}
        </div> 
          ${lineOfEvent('reminder', 'notes', eventLang().comments, icon.comments, 'text', '1/2')}
          ${renderButtonBlue(eventLang().addReminder, 'add--event-reminder__btn', 'add--event-reminder__btn', 100)}
      </form>`;
  }
}
