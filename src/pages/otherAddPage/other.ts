import { ICarData, IOther, IParamsOneEvents, IParamsOneReminder } from '../../types';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { paramsButton, renderButton } from '../../components/button';
import { paramsCollectionOther } from './paramsForLineEvent';
// import { updateCarData } from '../../utilits/updateCarData';
import { changeMileage } from '../../utilits/validMileage';
import { culcMaybeMileage } from '../../utilits/mathSpend';
import { createArrPlans } from '../plansPage/arrayReminders';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
import { buttonLang } from '../../lang/buttonLang';
import { createArrEvents } from '../eventsPage/arrayEvents';
import { createOther, deleteOther, updateOther } from '../../helpers/api';
import { addToBack } from '../../utilits/addToBack';
import { setCarDataFromDB } from '../../helpers/localStorage';

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
  carData: ICarData;
  pageCall: string | undefined;
  curID: string | undefined;
  url: URL | undefined;
  editEvent: string | undefined;
  addOtherBtn!: HTMLButtonElement;
  navigateTo: (path: string) => void;
  formDOM!: HTMLFormElement;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.url = new URL(window.location.href);
    this.curID = this.url.searchParams.get('id') as string;
    this.pageCall = this.url.searchParams.get('pageCall') as string;
    this.editEvent = this.url.searchParams.get('edit') as string;
    this.carData = JSON.parse(localStorage.getItem('car') as string);
    this.renderPage();
    this.initDOM();
    changeMileage(this.eventPage, this.carData);
    culcMaybeMileage(this.eventPage, this.carData);
    this.createotherEvent();
    this.fillInput();
    onFocus(this.eventPage);
  }

  initDOM() {
    this.formDOM = document.querySelector('#main-form__other') as HTMLFormElement;
    this.nameDOM = document.querySelector('#other__input_name') as HTMLInputElement;
    this.dateDOM = document.querySelector('#other__input_date') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#other__input_total') as HTMLInputElement;
    this.mileageDOM = document.querySelector('#other__input_mileage') as HTMLInputElement;
    this.placeDOM = document.querySelector('#other__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#other__input_notes') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.other__input') as NodeList;
    this.addOtherBtn = document.querySelector('#add--event-other__btn') as HTMLButtonElement;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.classList.add('hidden__menu');
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLOtherDOM());
  }

  fillInput() {
    if (this.curID) {
      if (this.pageCall === 'plans') {
        this.nameDOM.value = (
          createArrPlans(showPlans.myMaintenance).find((e) => e.id === this.curID) as IParamsOneReminder
        ).textName;
        this.nameDOM.readOnly = true;
        this.typeDOM.value = (
          createArrPlans(showPlans.myMaintenance).find((e) => e.id === this.curID) as IParamsOneReminder
        ).textType;
        this.typeDOM.readOnly = true;
      }

      if (this.pageCall === 'events' || this.pageCall === 'home') {
        const curEventArr = createArrEvents(this.eventPage);
        this.nameDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).titleName;
        this.dateDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).date;
        this.totalPriceDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).totalPrice;
        this.mileageDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).mileage;
        this.notesDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).notes;
        this.placeDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).place;
      }
    }
  }

  createotherEvent() {
    this.formDOM.addEventListener('submit', async (e) => {
      if (!this.editEvent) {
        e.preventDefault();
        this.updateBackEnd();
      } else {
        document.querySelector('.spinner')?.classList.remove('hidden');
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const btn = e.submitter;
        const eventid = form.dataset.mongoid;

        if (btn?.id === 'update--event-service__btn' && eventid) {
          const other: IOther = {
            date: this.dateDOM.value,
            mileage: this.mileageDOM.value,
            name: this.nameDOM.value,
            totalPrice: this.totalPriceDOM.value,
            place: this.placeDOM.value,
            notes: this.notesDOM.value,
            id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
              ? `${Date.now().toString()}_${
                  createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
                }`
              : Date.now().toString(),
            typeEvent: this.eventPage,
          };
          await updateOther(other, eventid);
          await setCarDataFromDB();
          document.querySelector('.spinner')?.classList.add('hidden');
          setTimeout(() => {
            this.navigateTo('/');
          }, 100);
        } else if (btn?.id === 'del--event-service__btn' && eventid) {
          await deleteOther(eventid);
          await setCarDataFromDB();
          document.querySelector('.spinner')?.classList.add('hidden');
          setTimeout(() => {
            this.navigateTo('/');
          }, 100);
        }
      }
    });
  }

  createHTMLOtherDOM() {
    return `
    <h2 class="events__title font-bold text-xl mb-7">${eventLang().other}</h2> 
    <form id="main-form__other" class="main-form__other grid grid-cols-2 gap-8 h-[35rem]"
    data-mongoID="${this.curID ? this.carData?.event.others.find((e) => e.id === this.curID)?._id : ''}">
    ${paramsCollectionOther
      .map((obj) => {
        return lineOfEvent(this.eventPage, obj);
      })
      .join('')}
      ${
        !this.editEvent
          ? renderButton(
              eventLang().addEvent,
              'add--event-service__btn',
              'add--event-service__btn col-span-2',
              paramsButton.blueFull
            )
          : `${renderButton(
              buttonLang().delete,
              'del--event-service__btn',
              'del--event-service__btn col-span-2 sm:col-span-1',
              paramsButton.redL
            )}
              ${renderButton(
                buttonLang().save,
                'update--event-service__btn',
                'update--event-service__btn col-span-2 sm:col-span-1',
                paramsButton.blueL
              )}`
      }
          </form>`;
  }

  async updateBackEnd() {
    document.querySelector('.spinner')?.classList.remove('hidden');
    const other: IOther = {
      date: this.dateDOM.value,
      mileage: this.mileageDOM.value,
      name: this.nameDOM.value,
      totalPrice: this.totalPriceDOM.value,
      place: this.placeDOM.value,
      notes: this.notesDOM.value,
      id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
        ? `${Date.now().toString()}_${
            createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
          }`
        : Date.now().toString(),
      typeEvent: this.eventPage,
    };

    const response = await createOther(other); // тут будет createRefuel и тд в зависимости от события
    addToBack(response, this.navigateTo, this.addOtherBtn);
  }
}
