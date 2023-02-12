import { IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { getMoney } from '../../components/units';

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

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.createReminderEvent();
    this.onFocus();
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.formReminder = document.querySelector('.main-form') as HTMLFormElement;
    this.mileageDOM = document.querySelector('#reminder__input_mileage') as HTMLInputElement;
    this.typeDOM = document.querySelector('#reminder__input_type') as HTMLInputElement;
    this.nameDOM = document.querySelector('#reminder__input_name') as HTMLInputElement;
    this.placeDOM = document.querySelector('#reminder__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#reminder__input_notes') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.reminder__input') as NodeList;
  }

  renderPage() {
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLreminderDOM());
  }

  onFocus() {
    const allInputArr: HTMLInputElement[] = [...this.formReminder.querySelectorAll('input')];
    const allTitleArr: HTMLElement[] = Array.from(this.formReminder.querySelectorAll('.reminder__title'));

    allInputArr.forEach((eI) => {
      if (eI.value.length > 0) {
        allTitleArr.forEach((eT) => {
          if (eI.id.slice(15) === eT.id.slice(15)) {
            eT.style.top = '-1.5rem';
          }
        });
      }
    });

    this.formReminder.addEventListener('focusout', function (event) {
      if ((event.target as HTMLInputElement).matches('.reminder__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.reminder__item') as HTMLElement;
        const titleLine = lineParent.querySelector('.reminder__title') as HTMLElement;
        if (curInput.value === '') {
          titleLine.style.top = '0';
        }
      }
    });
    this.formReminder.addEventListener('focusin', function (event) {
      if ((event.target as HTMLInputElement).matches('.reminder__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.reminder__item') as HTMLElement;
        const titleLine = lineParent.querySelector('.reminder__title') as HTMLElement;
        titleLine.style.top = '-1.5rem';
      }
    });
  }

  createReminderEvent() {
    const addreminderBtn = document.querySelector('.add--event-reminder__btn') as HTMLFormElement;
    addreminderBtn.addEventListener('click', (event) => {
      this.initDOM();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;

      newCarData.event.reminder.push({
        /*           type: string;
  name: number;
  previosDate: Date;
  previosMileage: number;
  repeatTime: string;
  repeatMileage: number;
  notes: string;
  id: string;
        date: new Date().toLocaleString(),
        mileage: Number(this.mileageDOM.value),
        type: this.typeDOM.value,
        name: this.nameDOM.value,
          previosDate: new Date().toLocaleString();
  previosMileage: number;
        amount: this.amountreminderAll(),
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(), */
      });
      event.preventDefault();
      localStorage.setItem('car', JSON.stringify(newCarData));
      // formDervice.submit();
      // console.log(carData);
      // event.preventDefault();
    });
  }

  createHTMLreminderDOM() {
    return `<form id="main-form reminder" class="main-form reminder flex flex-col gap-8 justify-between h-80" action="/" method="put">
      ${lineOfEvent('reminder', 'type', eventLang().type, icon.gear, 'text', 'full')}
      ${lineOfEvent('reminder', 'name', eventLang().name, icon.pen, 'text', 'full')}
        <div id="reminder__detals-add_container" class="reminder__detals-add_container flex items-center">
            ${icon.wrench}
          <span id="detals-add__title" class="detals-add__title mb-0">
            Детали
          </span>
          <ul id="detals__list" class="detals__list"></ul>
          <button id="detals-add__btn" class="detals-add__btn ml-4">
            ${icon.plus}
          </button>
        </div>
        <div id="reminder__total_container" class="reminder__total_container flex justify-between">
              ${lineOfEvent(
                'reminder',
                'cost-works',
                eventLang().costWorks,
                icon.cost,
                'number',
                '1/2',
                getMoney('BY')
              )}
                ${lineOfEvent('reminder', 'total', eventLang().amount, icon.wallet, 'number', '1/2', getMoney('BY'))}
        </div>
        <div id="reminder__time_container" class="reminder__time_container flex justify-between">
                ${lineOfEvent(
                  'reminder',
                  'date',
                  eventLang().date,
                  icon.date,
                  'datetime-local',
                  '',
                  `${new Date().toISOString().slice(0, 16)}`
                )}
                ${lineOfEvent('reminder', 'mileage', eventLang().mileage, icon.mileage, 'number', '1/2')}
        </div>
          ${lineOfEvent('reminder', 'place', eventLang().place, icon.place, 'text', '1/2')}
          ${lineOfEvent('reminder', 'notes', eventLang().comments, icon.comments, 'text', '1/2')}
        <button id="add--event-reminder__btn" class="add--event-reminder__btn text-md bg-blue text-white px-7 py-1 rounded-md" type="submit">
          ${eventLang().addEvent}
        </button>
      </form>`;
  }
}
