import { ICarData, IParamsOneReminder, IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue, renderButtonWhite } from '../../components/button';
import { paramsCollectionReminder, showPlans } from './paramsForLineEvent';
// import { updateCarData } from '../../utilits/updateCarData';
import { createArrPlans } from '../plansPage/arrayReminders';
import { diffDates } from '../../utilits/mathSpend';
import { getDateTime } from '../../utilits/dateTimeFunc';
import { buttonLang } from '../../lang/buttonLang';
import { createReminder } from '../../helpers/api';
import { addToBack } from '../../utilits/addToBack';

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
  carData: ICarData;
  onMileageDOM!: HTMLInputElement;
  afterMileageDOM!: HTMLInputElement;
  onDateDOM!: HTMLInputElement;
  repeatDOM!: HTMLInputElement;
  pageCall: string | undefined;
  url: URL;
  curID: string | undefined;
  editEvent: string | undefined;
  navigateTo: (path: string) => void;
  addReminderBtn: HTMLButtonElement | undefined;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.url = new URL(window.location.href);
    this.curID = this.url.searchParams.get('id') as string;
    this.pageCall = this.url.searchParams.get('pageCall') as string;
    this.editEvent = this.url.searchParams.get('edit') as string;
    this.renderPage();
    this.initDOM();
    this.carData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;
    this.fillInput();
    this.calcDiffMileage();
    this.createReminderEvent();
    console.log(this.editEvent);
    onFocus(this.eventPage);
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.typeDOM = document.querySelector('#reminder__input_type') as HTMLInputElement;
    this.nameDOM = document.querySelector('#reminder__input_name') as HTMLInputElement;
    this.previosDateDOM = document.querySelector('#reminder__input_previos-date') as HTMLInputElement;
    this.previosMileageDOM = document.querySelector('#reminder__input_previos-mileage') as HTMLInputElement;
    this.onMileageDOM = document.querySelector('#reminder__input_on-mileage') as HTMLInputElement;
    this.afterMileageDOM = document.querySelector('#reminder__input_after-mileage') as HTMLInputElement;
    this.onDateDOM = document.querySelector('#reminder__input_on-date') as HTMLInputElement;
    this.repeatDOM = document.querySelector('#reminder__input_repeat') as HTMLInputElement;
    this.notesDOM = document.querySelector('#reminder__input_notes') as HTMLInputElement;

    this.allInput = document.querySelectorAll('.reminder__input') as NodeList;

    this.addReminderBtn = document.querySelector('#add--event-reminder__btn') as HTMLButtonElement | undefined;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.classList.add('hidden__menu');
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLreminderDOM());
  }

  fillInput() {
    if (this.curID) {
      this.nameDOM.value = (
        createArrPlans(showPlans.allPlans).find((e) => e.id === this.curID) as IParamsOneReminder
      ).textName;
      this.nameDOM.readOnly = true;
      this.typeDOM.value = (
        createArrPlans(showPlans.allPlans).find((e) => e.id === this.curID) as IParamsOneReminder
      ).textType;
      this.typeDOM.readOnly = true;
    }
    if (this.editEvent) {
      this.typeDOM.readOnly = false;
      this.nameDOM.readOnly = false;
      this.onMileageDOM.value = this.carData.event.reminders.find((e) => e.id === this.curID)
        ?.rememberOnMilege as string;
      this.afterMileageDOM.value = this.carData.event.reminders.find((e) => e.id === this.curID)
        ?.rememberAfterMilege as string;
      this.onDateDOM.value = this.carData.event.reminders.find((e) => e.id === this.curID)?.rememberOnDate as string;
      this.repeatDOM.checked = this.carData.event.reminders.find((e) => e.id === this.curID)?.repeat as boolean;
    }
  }

  calcDiffMileage() {
    this.onMileageDOM.addEventListener('change', () => {
      console.log(this.onMileageDOM.value);
      console.log(this.nameDOM.value);
      if (+this.onMileageDOM.value < +this.carData.indicators.curMileage) {
        this.onMileageDOM.value = this.carData.indicators.curMileage;
      }
      this.afterMileageDOM.value = this.onMileageDOM.value
        ? String(+this.onMileageDOM.value - +this.carData.indicators.curMileage)
        : '';
      onFocus(this.eventPage);
    });
    this.afterMileageDOM.addEventListener('change', () => {
      this.onMileageDOM.value = this.afterMileageDOM.value
        ? String(+this.afterMileageDOM.value + +this.carData.indicators.curMileage)
        : '';
      onFocus(this.eventPage);
    });
  }

  requredMileageDate() {
    this.onMileageDOM.value ? (this.onDateDOM.required = false) : (this.onDateDOM.required = true);
    this.onDateDOM.value ? (this.onMileageDOM.required = false) : (this.onMileageDOM.required = true);
  }

  createReminderEvent() {
    if (this.addReminderBtn) {
      this.addReminderBtn.addEventListener('click', (e) => {
        alert('q');
        e.preventDefault();
        this.updateBackEnd();
        // this.initDOM();
        // this.reminderEvent = {
        //   type: this.typeDOM.value,
        //   name: this.nameDOM.value,
        //   previosDate: this.previosDateDOM.value,
        //   previosMileage: this.previosMileageDOM.value,
        //   rememberOnMilege: this.onMileageDOM.value,
        //   rememberAfterMilege: this.afterMileageDOM.value,
        //   rememberOnDate: this.onDateDOM.value,
        //   rememberAfterDate: String(diffDates(this.onDateDOM.value, getDateTime().slice(0, -6))),
        //   repeat: this.repeatDOM.checked,
        //   notes: this.notesDOM.value,
        //   id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
        //     ? createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
        //     : Date.now().toString(),
        // };
        // const eventArr = this.carData.event.reminders;
        // this.requredMileageDate(); // Впрос проверить работате или нет
        // if (Array.from(this.allInput).every((e) => (e as HTMLInputElement).checkValidity())) {
        //   updateCarData(this.carData, this.eventPage, eventArr, this.reminderEvent);

        if (this.pageCall) {
          e.preventDefault();
          window.location.href = `/${this.pageCall}`;
        }
      });
    }
    // здеь нужно строить логику на нажтие УДаЛИТЬ И ИЗМЕНИТЬ
  }

  createHTMLreminderDOM() {
    console.log(this.editEvent);
    return `
            <h2 class="events__title font-bold text-xl mb-7">${eventLang().reminder}</h2> 
    <form id="main-form reminder" class="main-form reminder grid grid-cols-2 gap-8 justify-between h-80">

                ${paramsCollectionReminder
                  .map((obj) => {
                    return lineOfEvent(this.eventPage, obj);
                  })
                  .join('')}
        ${
          !this.editEvent
            ? renderButtonBlue(
                eventLang().addEvent,
                'add--event-reminder__btn col-span-2',
                'add--event-reminder__btn',
                '2'
              )
            : `${renderButtonWhite(
                buttonLang().delete,
                'del--event-reminder__btn col-span-1 h-12',
                'del--event-reminder__btn',
                'full'
              )}
              ${renderButtonWhite(
                buttonLang().save,
                'save--event-reminder__btn col-span-1 h-12',
                'save--event-reminder__btn',
                'full'
              )}`
        }
      </form>`;
  }

  // методы для БЭКА
  async updateBackEnd() {
    document.querySelector('.spinner')?.classList.remove('hidden');

    const reminder: IReminders = {
      type: this.typeDOM.value,
      name: this.nameDOM.value,
      previosDate: this.previosDateDOM.value,
      previosMileage: this.previosMileageDOM.value,
      rememberOnMilege: this.onMileageDOM.value,
      rememberAfterMilege: this.afterMileageDOM.value,
      rememberOnDate: this.onDateDOM.value,
      rememberAfterDate: String(diffDates(this.onDateDOM.value, getDateTime().slice(0, -6))),
      repeat: this.repeatDOM.checked,
      notes: this.notesDOM.value,
      id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
        ? createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
        : Date.now().toString(),
    };

    const response = await createReminder(reminder); // тут будет createRefuel и тд в зависимости от события
    console.log(response);
    alert(11);
    addToBack(response, this.navigateTo, this.addReminderBtn as HTMLButtonElement);
  }
}
