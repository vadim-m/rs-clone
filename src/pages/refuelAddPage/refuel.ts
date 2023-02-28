import { ICarData, IParamsOneEvents, IRefuel } from '../../types';
import { culcMaybeMileage, culcSpendFuelTotal } from '../../utilits/mathSpend';
import { lineOfEvent } from '../../components/lineEvent';
import { eventLang } from '../../lang/addEventLang';
import { onFocus } from '../../utilits/onFocusFunc';
import { paramsButton, renderButton, renderButtonWhite } from '../../components/button';
import { paramsCollectionRefuel } from './paramsForLineEvent';
import { updateCarData } from '../../utilits/updateCarData';
import { changeMileage } from '../../utilits/validMileage';
import { buttonLang } from '../../lang/buttonLang';
import { createArrEvents } from '../eventsPage/arrayEvents';
import { createRefuel } from '../../helpers/api';
import { setCarDataFromDB } from '../../helpers/localStorage';
// import { setCarDataFromDB } from '../../helpers/localStorage';

export class Refuel {
  eventPage = 'refuel';
  refuelEvent: IRefuel | undefined;
  mileageDOM!: HTMLInputElement;
  typeFuelDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  parent!: HTMLElement;
  addEventCircule!: HTMLElement;
  priceFuelDOM!: HTMLInputElement;
  amountFuelDOM!: HTMLInputElement;
  totalPriceDOM!: HTMLInputElement;
  tankFullDOM!: HTMLInputElement;
  allInput!: NodeList;
  dateDOM!: HTMLInputElement;
  formDOM!: HTMLFormElement;
  carData: ICarData;
  url: URL;
  curID: string;
  pageCall: string;
  editEvent: string | undefined;
  addrefuelBtn!: HTMLButtonElement;
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
    this.changeTotalPriceDetals();
    this.carData = JSON.parse(localStorage.getItem('car') as string);
    culcMaybeMileage(this.eventPage, this.carData);
    changeMileage(this.eventPage, this.carData);
    this.createRefuelEvent();
    this.fillInput();
    onFocus(this.eventPage);
  }

  initDOM() {
    this.formDOM = document.querySelector('#main-form') as HTMLFormElement;
    this.typeFuelDOM = document.querySelector('#refuel__input_type-fuel') as HTMLInputElement;
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
    this.mileageDOM = document.querySelector('#refuel__input_mileage') as HTMLInputElement;
    this.tankFullDOM = document.querySelector('#refuel__input_tank-full') as HTMLInputElement;
    this.placeDOM = document.querySelector('#refuel__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#refuel__input_notes') as HTMLInputElement;
    this.dateDOM = document.querySelector('#refuel__input_date') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.refuel__input') as NodeList;
    this.addrefuelBtn = document.querySelector('.add--event-refuel__btn') as HTMLButtonElement;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLrefuelDOM());
  }
  fillInput() {
    if (this.curID) {
      const curEventArr = createArrEvents(this.eventPage);
      this.amountFuelDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)
        .amountFuel as string;
      this.typeFuelDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).titleName;
      this.dateDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).date;
      this.totalPriceDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).totalPrice;
      this.mileageDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).mileage;
      this.notesDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).notes;
      this.placeDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).place;
      this.priceFuelDOM.value = String(+this.totalPriceDOM.value / +this.amountFuelDOM.value);
    }
  }

  changeTotalPriceDetals() {
    this.priceFuelDOM = document.querySelector('#refuel__input_price') as HTMLInputElement;
    this.amountFuelDOM = document.querySelector('#refuel__input_amount-fuel') as HTMLInputElement;
    this.totalPriceDOM = document.querySelector('#refuel__input_total') as HTMLInputElement;
    this.priceFuelDOM.addEventListener('input', () => {
      if (this.totalPriceDOM.value !== '') {
        this.amountFuelDOM.value = String(+this.totalPriceDOM.value / +this.priceFuelDOM.value);
        if (this.priceFuelDOM.value === '') {
          this.amountFuelDOM.value = '';
        }
      }
      this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      onFocus(this.eventPage);
    });
    this.amountFuelDOM.addEventListener('input', () => {
      if (this.priceFuelDOM.value !== '') {
        this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      }
      this.totalPriceDOM.value = String(+this.priceFuelDOM.value * +this.amountFuelDOM.value);
      onFocus(this.eventPage);
    });
    this.amountFuelDOM.addEventListener('change', () => {
      if (this.amountFuelDOM.value !== '') {
        this.priceFuelDOM.value = String(+this.totalPriceDOM.value / +this.amountFuelDOM.value);
      }
      onFocus(this.eventPage);
    });

    this.totalPriceDOM.addEventListener('input', () => {
      this.amountFuelDOM.value = String(+this.totalPriceDOM.value / +this.priceFuelDOM.value);
      onFocus(this.eventPage);
    });
  }

  createRefuelEvent() {
    if (!this.editEvent) {
      this.addrefuelBtn.addEventListener('click', () => {
        this.initDOM();

        this.refuelEvent = {
          date: this.dateDOM.value,
          mileage: this.mileageDOM.value,
          name: this.typeFuelDOM.value,
          priceFuel: this.priceFuelDOM.value,
          amountFuel: this.amountFuelDOM.value,
          totalPrice: this.totalPriceDOM.value,
          totalSpendFuel: culcSpendFuelTotal(this.carData),
          isFull: this.tankFullDOM.checked,
          place: this.placeDOM.value,
          notes: this.notesDOM.value,
          id: Date.now().toString(),
          typeEvent: this.eventPage,
        };
        const eventArr = this.carData.event.refuel;
        if (Array.from(this.allInput).every((e) => (e as HTMLInputElement).checkValidity())) {
          updateCarData(this.carData, this.eventPage, eventArr, this.refuelEvent);
        }
      });
    }
  }

  createHTMLrefuelDOM() {
    return `
        <h2 class="events__title font-bold text-xl mb-7">${eventLang().refuel}</h2> 
          <form id="main-form refuel" class="main-form refuel grid grid-cols-2 gap-y-8 gap-x-14 justify-center h-[32rem] w-full" action="/" method="put">
          ${paramsCollectionRefuel
            .map((obj) => {
              return lineOfEvent(this.eventPage, obj);
            })
            .join('')}
      ${
        !this.editEvent
          ? renderButton(eventLang().addEvent, 'add--event-refuel__btn col-span-2', paramsButton.blueFull)
          : `${renderButtonWhite(
              buttonLang().delete,
              'add--event-refuel__btn col-span-1',
              'add--event-refuel__btn',
              '1/2'
            )}
              ${renderButtonWhite(
                buttonLang().save,
                'add--event-refuel__btn col-span-1',
                'add--event-refuel__btn',
                '1/2'
              )}`
      }
          </form>`;
  }

  // методы для БЭКА
  updateBackEnd() {
    this.formDOM?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const refuel: IRefuel = {
        date: this.dateDOM.value,
        mileage: this.mileageDOM.value,
        name: this.typeFuelDOM.value,
        priceFuel: this.priceFuelDOM.value,
        amountFuel: this.amountFuelDOM.value,
        totalPrice: this.totalPriceDOM.value,
        totalSpendFuel: culcSpendFuelTotal(this.carData),
        isFull: this.tankFullDOM.checked,
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
        typeEvent: this.eventPage,
      };
      console.log(refuel);
      const response = await createRefuel(refuel); // тут будет createRefuel и тд в зависимости от события

      const status = response.status;
      const data = await response.json();

      console.log(data, status);

      if (status === 200 || status === 201) {
        // получаем и устанавливаем свежие данные в LS
        await setCarDataFromDB();
        // спрятали спиннер
        document.querySelector('.spinner')?.classList.add('hidden');
        // переадресация на главную
        setTimeout(() => {
          this.navigateTo('/');
        }, 100);
      } else {
        // ЕСЛИ сервер ответил с ошибкой
        this.addrefuelBtn.disabled = false;
        document.querySelector('.spinner')?.classList.add('hidden');
      }
    });
  }
}
