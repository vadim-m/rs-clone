import { ICarData, IOther, IParamsOneEvents, IParamsOneReminder } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { renderButtonBlue, renderButtonWhite } from '../../components/button';
import { paramsCollectionOther } from './paramsForLineEvent';
import { updateCarData } from '../../utilits/updateCarData';
import { changeMileage } from '../../utilits/validMileage';
import { culcMaybeMileage } from '../../utilits/mathSpend';
import { createArrPlans } from '../plansPage/arrayReminders';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
import { buttonLang } from '../../lang/buttonLang';
import { createArrEvents } from '../eventsPage/arrayEvents';
import { createOther } from '../../helpers/api';
import { addToBack } from '../../utilits/addToBack';

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
    changeMileage(this.eventPage, this.carData);
    culcMaybeMileage(this.eventPage, this.carData);
    this.createotherEvent();
    this.fillInput();
    onFocus(this.eventPage);
  }

  initDOM() {
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
    this.addEventCircule.style.display = 'none';
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
    if (!this.editEvent) {
      this.addOtherBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.updateBackEnd();
        // this.initDOM();

        // this.otherEvent = {
        //   date: this.dateDOM.value,
        //   mileage: this.mileageDOM.value,
        //   name: this.nameDOM.value,
        //   totalPrice: this.totalPriceDOM.value,
        //   place: this.placeDOM.value,
        //   notes: this.notesDOM.value,
        //   id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
        //     ? `${Date.now().toString()}_${
        //         createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
        //       }`
        //     : Date.now().toString(),
        //   typeEvent: this.eventPage,
        // };
        // const eventArr = this.carData.event.others;
        // if (Array.from(this.allInput).every((e) => (e as HTMLInputElement).checkValidity())) {
        //   updateCarData(this.carData, this.eventPage, eventArr, this.otherEvent);
        // }
      });
    }
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
    ${
      !this.editEvent
        ? renderButtonBlue(eventLang().addEvent, 'add--event-other__btn col-span-2', 'add--event-other__btn', 'full')
        : `${renderButtonWhite(buttonLang().delete, 'add--event-other__btn col-span-1', 'add--event-other__btn', '1/2')}
              ${renderButtonWhite(
                buttonLang().save,
                'add--event-other__btn col-span-1',
                'add--event-other__btn',
                '1/2'
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
    //   const status = response.status;
    //   const data = await response.json();
    //   console.log(data, status);
    //   if (status === 200 || status === 201) {
    //     // получаем и устанавливаем свежие данные в LS
    //     await setCarDataFromDB();
    //     // спрятали спиннер
    //     document.querySelector('.spinner')?.classList.add('hidden');
    //     // переадресация на главную
    //     setTimeout(() => {
    //       this.navigateTo('/');
    //     }, 2000);
    //   } else {
    //     // ЕСЛИ сервер ответил с ошибкой
    //     this.addrefuelBtn.disabled = false;
    //     document.querySelector('.spinner')?.classList.add('hidden');
    //   }
  }
}
