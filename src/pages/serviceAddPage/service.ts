import { IService, IDetals, ICarData, ISettingsMyCar, IParamsOneEvents, IReminders } from '../../types';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconFont';
import { eventLang } from '../../lang/addEventLang';
import { buttonLang } from '../../lang/buttonLang';
import { Popup } from '../../components/popup';
import { searchLi } from '../../utilits/searchElement';
import { currentLiArr } from '../../utilits/searchElement';
import { paramsButton, renderButton } from '../../components/button';
import { onFocus } from '../../utilits/onFocusFunc';
import { collectionServiceArr } from './paramsForLineEvent';
import { changeMileage } from '../../utilits/validMileage';
import { culcMaybeMileage } from '../../utilits/mathSpend';
import { createArrPlans } from '../plansPage/arrayReminders';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
import { defaultSettings } from '../../constants/constants';
import { createArrEvents } from '../eventsPage/arrayEvents';
import { addToBack } from '../../utilits/addToBack';
import { createService, deleteService, updateService } from '../../helpers/api';
import { setCarDataFromDB } from '../../helpers/localStorage';
import { getDateTime } from '../../utilits/dateTimeFunc';
import { updateReminderRepeat } from '../../utilits/repeatReminders';

export class Service {
  eventPage = 'service';

  serviceEvent: IService | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  detalsTitleDOM!: HTMLElement;
  detalsBtnDOM!: HTMLButtonElement;
  formDOM!: HTMLFormElement;
  totalPriceDetals!: HTMLInputElement;
  costWorksDOM!: HTMLInputElement;
  totalPriceTitle!: HTMLElement;
  parent!: HTMLElement;
  pageBody!: HTMLElement;
  allInput!: NodeList;
  detalsListDOM!: HTMLElement;
  addEventCircule!: HTMLElement;
  nameItem!: HTMLElement;
  dateDOM!: HTMLInputElement;
  carData: ICarData;
  totalPriceService!: HTMLInputElement;
  pageCall: string | undefined;
  curID: string | undefined;
  url: URL | undefined;
  editEvent: string | undefined;
  setting: ISettingsMyCar;
  addServiceBtn!: HTMLButtonElement;
  navigateTo: (path: string) => void;
  popupDetalName!: HTMLInputElement;
  popupDetalPart!: HTMLInputElement;
  popupDetalManuf!: HTMLInputElement;
  popupDetalPrice!: HTMLInputElement;
  popupDetalQuant!: HTMLInputElement;
  popupDetalAmount!: HTMLInputElement;
  detalsNameDOM!: NodeList;
  detalsPartDOM!: NodeList;
  detalsManufDOM!: NodeList;
  detalsPriceTotalDOM!: NodeList;
  detalsPriceDOM!: NodeList;
  detalsQuantyDOM!: NodeList;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.url = new URL(window.location.href);
    this.curID = this.url.searchParams.get('id') as string;
    this.pageCall = this.url.searchParams.get('pageCall') as string;
    this.editEvent = this.url.searchParams.get('edit') as string;
    this.carData = JSON.parse(localStorage.getItem('car') as string);
    this.renderPage();
    this.nameItem = document.querySelector('.service__item_name') as HTMLElement;
    this.renderDetalContainer();
    this.initDOM();
    this.setting = localStorage.getItem('settingsCar')
      ? JSON.parse(localStorage.getItem('settingsCar') as string)
      : defaultSettings;
    culcMaybeMileage(this.eventPage, this.carData);
    changeMileage(this.eventPage, this.carData);
    this.addDetals();
    this.createServiceEvent();
    this.calcTotalPriceService();
    this.changeDetals();
    this.fillInput();
    onFocus(this.eventPage);
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.formDOM = document.querySelector('.main-form') as HTMLFormElement;
    this.mileageDOM = document.querySelector('#service__input_mileage') as HTMLInputElement;
    this.typeDOM = document.querySelector('#service__input_type') as HTMLInputElement;
    this.nameDOM = document.querySelector('#service__input_name') as HTMLInputElement;
    this.dateDOM = document.querySelector('#service__input_date') as HTMLInputElement;
    this.placeDOM = document.querySelector('#service__input_place') as HTMLInputElement;
    this.notesDOM = document.querySelector('#service__input_notes') as HTMLInputElement;
    this.allInput = document.querySelectorAll('.service__input') as NodeList;

    this.detalsTitleDOM = document.querySelector('.detals-add__title') as HTMLElement;
    this.detalsListDOM = document.querySelector('.detals__list') as HTMLElement;
    this.detalsBtnDOM = document.querySelector('.detals-add__btn') as HTMLButtonElement;
    // this.detalsBtnDOM.disabled = true;
    this.totalPriceService = document.querySelector('.service__input_total') as HTMLInputElement;
    this.costWorksDOM = document.querySelector('.service__input_cost-works') as HTMLInputElement;
    this.totalPriceTitle = document.querySelector('.service__title_total') as HTMLElement;

    this.addServiceBtn = document.querySelector('.add--event-service__btn') as HTMLButtonElement;
  }

  initPopupInput() {
    this.popupDetalName = document.querySelector(`.popup__input_name`) as HTMLInputElement;
    this.popupDetalPart = document.querySelector(`.popup__input_part`) as HTMLInputElement;
    this.popupDetalManuf = document.querySelector(`.popup__input_manuf`) as HTMLInputElement;
    this.popupDetalPrice = document.querySelector(`.popup__input_price`) as HTMLInputElement;
    this.popupDetalQuant = document.querySelector(`.popup__input_quant`) as HTMLInputElement;
    this.popupDetalAmount = document.querySelector(`.popup__input_amount`) as HTMLInputElement;
  }
  initDetalsDOM() {
    this.detalsNameDOM = document.querySelectorAll('.detals__item_name') as NodeList;
    this.detalsPartDOM = document.querySelectorAll('.detals-part__input') as NodeList;
    this.detalsManufDOM = document.querySelectorAll('.detals__item_manuf') as NodeList;
    this.detalsPriceTotalDOM = document.querySelectorAll('.detals__item_price') as NodeList;
    this.detalsPriceDOM = document.querySelectorAll('.detals-cost__price') as NodeList;
    this.detalsQuantyDOM = document.querySelectorAll('.detals-cost__quant') as NodeList;
  }
  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.classList.add('hidden__menu');
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLServiceDOM());
  }

  renderDetalContainer() {
    this.nameItem.insertAdjacentHTML('afterend', this.createHTMLContainerDetalDOM());
  }
  fillInput() {
    if (this.curID) {
      const curEventArr = createArrEvents(this.eventPage);
      this.nameDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.titleName
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).titleName
        : (this.carData.event.reminders.find((e) => e.id === this.curID) as IReminders).name
        ? (this.carData.event.reminders.find((e) => e.id === this.curID) as IReminders).name
        : '';
      this.typeDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.titleType
        ? ((curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.titleType as string)
        : (this.carData.event.reminders.find((e) => e.id === this.curID) as IReminders).type
        ? (this.carData.event.reminders.find((e) => e.id === this.curID) as IReminders).type
        : '';
      this.dateDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.date
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).date
        : getDateTime();
      this.costWorksDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.costWorks
        ? ((curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).costWorks as string)
        : '';
      this.totalPriceService.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.totalPrice
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).totalPrice
        : '';
      this.mileageDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.mileage
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).mileage
        : '';
      this.notesDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.notes
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).notes
        : '';
      this.placeDOM.value = (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents)?.place
        ? (curEventArr.find((e) => e.id === this.curID) as IParamsOneEvents).place
        : '';

      const curDetalsArr = (this.carData.event.service.find((e) => e.id === this.curID) as IService)
        .detals as IDetals[];
      if (curDetalsArr?.length > 0) {
        this.createHTMLContainerDetalDOM();
        for (let i = 0; i < curDetalsArr.length; i += 1) {
          this.detalsListDOM.insertAdjacentHTML(
            'beforeend',
            this.createHTMLDetalsDOM(
              curDetalsArr[i].name,
              curDetalsArr[i].partNumber,
              curDetalsArr[i].manufacturer,
              curDetalsArr[i].quantity,
              curDetalsArr[i].price,
              curDetalsArr[i].amount
            )
          );
        }
      }
    }
  }

  changeTotalPriceDetals() {
    this.initPopupInput();
    this.popupDetalPrice.addEventListener('input', () => {
      if (this.popupDetalAmount.value !== '') {
        this.popupDetalQuant.value = String(+this.popupDetalAmount.value / +this.popupDetalPrice.value);
        if (this.popupDetalPrice.value === '') {
          this.popupDetalQuant.value = '';
        }
      }
      onFocus(this.eventPage);
    });
    this.popupDetalQuant.addEventListener('input', () => {
      if (this.popupDetalPrice.value !== '') {
        this.popupDetalAmount.value = String(+this.popupDetalPrice.value * +this.popupDetalQuant.value);
      }
      onFocus(this.eventPage);
    });
    this.popupDetalAmount.addEventListener('input', () => {
      this.popupDetalQuant.value = String(+this.popupDetalAmount.value / +this.popupDetalPrice.value);
      onFocus(this.eventPage);
    });
  }

  recalcTotal() {
    this.totalPriceService.value = String(this.amountDetalsAll() + +this.costWorksDOM.value);
  }

  calcTotalPriceService() {
    this.costWorksDOM.addEventListener('change', () => {
      this.recalcTotal();
      onFocus(this.eventPage);
    });
  }

  amountDetalsAll(): number {
    const allCostDetals = Array.from(document.querySelectorAll('.detals__item_price'));

    if (allCostDetals.length > 0) {
      const totalPriceDetals = String(
        allCostDetals.reduce((acc, e) => {
          return acc + Number((e as HTMLElement).textContent);
        }, 0)
      );
      this.totalPriceTitle.style.top = '-1.5rem';
      this.totalPriceTitle.style.color = 'grey';
      this.totalPriceTitle.style.fontSize = '0.8rem';
      return +totalPriceDetals;
    } else return 0;
  }

  addDetals() {
    this.detalsBtnDOM.addEventListener('click', (event) => {
      event.preventDefault();
      new Popup(
        this.createHTMLDetalsPopup(),
        buttonLang().cancel,
        'confirm__btn--cencel',
        'confirm__btn--cencel',
        buttonLang().ok,
        'confirm__btn--ok',
        'confirm__btn--ok'
      );
      this.changeTotalPriceDetals();
    });
    this.saveDetalsFromPopup();
  }

  saveDetalsFromPopup() {
    this.pageBody.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).matches('.confirm__btn--ok')) {
        const popupDOM = document.querySelector('.popup__container') as HTMLElement;
        const allInputPopupArr = Array.from(popupDOM.querySelectorAll('input'));
        if (allInputPopupArr.some((e) => e.value !== '')) {
          this.initPopupInput();
          this.detalsListDOM.insertAdjacentHTML(
            'beforeend',
            this.createHTMLDetalsDOM(
              this.popupDetalName.value,
              this.popupDetalPart.value,
              this.popupDetalManuf.value,
              this.popupDetalQuant.value,
              this.popupDetalPrice.value,
              this.popupDetalAmount.value
            )
          );
        }
      }
      this.recalcTotal();
    });
  }

  changeDetals() {
    this.detalsListDOM.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLElement);
      const currentDetal = currentLiArr[0];
      const popupInstance = new Popup(
        this.createHTMLDetalsPopup(),
        buttonLang().delete,
        'confirm__btn--delete',
        'confirm__btn--delete',
        buttonLang().edit,
        'confirm__btn--edit',
        'confirm__btn--edit'
      );
      const popup = document.querySelector('.popup__container');
      this.initPopupInput();
      const currentDetalName = currentDetal.querySelector('.detals__item_name') as HTMLElement;
      const currentDetalPart = currentDetal.querySelector('.detals-part__input') as HTMLElement;
      const currentDetalManuf = currentDetal.querySelector('.detals__item_manuf') as HTMLElement;
      const currentDetalPrice = currentDetal.querySelector('.detals__item_price') as HTMLElement;
      const currentDetalCostQuant = currentDetal.querySelector('.detals-cost__quant') as HTMLElement;
      const currentDetalCostPrice = currentDetal.querySelector('.detals-cost__price') as HTMLElement;

      this.popupDetalName.value = currentDetalName?.textContent as string;
      this.popupDetalPart.value = currentDetalPart?.textContent?.slice(1, -1) as string;
      this.popupDetalManuf.value = currentDetalManuf?.textContent as string;
      this.popupDetalPrice.value = currentDetalCostPrice?.textContent as string;
      this.popupDetalQuant.value = currentDetalCostQuant?.textContent as string;
      this.popupDetalAmount.value = currentDetalPrice?.textContent as string;

      this.changeTotalPriceDetals();

      popup?.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          currentDetalName.textContent = this.popupDetalName.value;
          currentDetalPart.textContent = `${this.popupDetalPart.value ? `[${this.popupDetalPart.value}]` : ''}`;
          currentDetalManuf.textContent = this.popupDetalManuf.value;
          currentDetalPrice.textContent = this.popupDetalAmount.value;
          currentDetalCostQuant.textContent = this.popupDetalQuant.value;
          currentDetalCostPrice.textContent = this.popupDetalPrice.value;
          this.recalcTotal();
        }
        if ((event.target as HTMLElement).matches('.confirm__btn--delete')) {
          searchLi(event.target as HTMLElement, event.currentTarget as HTMLElement);
          popupInstance.removePopup();
          currentDetal.remove();
          this.recalcTotal();
        }
      });
    });
  }

  createServiceEvent() {
    this.formDOM.addEventListener('submit', async (e) => {
      updateReminderRepeat(this.carData, this.nameDOM, this.dateDOM, this.mileageDOM);

      if (!this.editEvent) {
        e.preventDefault();
        this.updateBackEnd();
      } else {
        const form = e.target as HTMLFormElement;
        const btn = e.submitter;
        const eventid = form.dataset.mongoid;
        document.querySelector('.spinner')?.classList.remove('hidden');
        e.preventDefault();

        if (btn?.id === 'update--event-service__btn' && eventid) {
          const worksDetalsArr: IDetals[] = [];
          this.initDetalsDOM();
          for (let i = 0; i < this.detalsNameDOM.length; i += 1) {
            worksDetalsArr.push({
              name: (this.detalsNameDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsNameDOM[i] as HTMLElement)?.textContent as string)
                : '',
              partNumber: (this.detalsPartDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsPartDOM[i] as HTMLElement)?.textContent?.slice(1, -1) as string)
                : '',
              manufacturer: (this.detalsManufDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsManufDOM[i] as HTMLElement)?.textContent as string)
                : '',
              price: (this.detalsPriceDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsPriceDOM[i] as HTMLElement)?.textContent as string)
                : '',
              quantity: (this.detalsQuantyDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsQuantyDOM[i] as HTMLElement)?.textContent as string)
                : '',
              amount: (this.detalsPriceTotalDOM[i] as HTMLElement)?.textContent
                ? ((this.detalsPriceTotalDOM[i] as HTMLElement)?.textContent as string)
                : '',
            });
          }
          const service: IService = {
            date: this.dateDOM.value,
            mileage: this.mileageDOM.value,
            type: this.typeDOM.value,
            name: this.nameDOM.value,
            detals: worksDetalsArr,
            costWorks: this.costWorksDOM.value,
            totalPrice: this.totalPriceService.value,
            place: this.placeDOM.value,
            notes: this.notesDOM.value,
            id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
              ? `${Date.now().toString()}_${
                  createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
                }`
              : Date.now().toString(),
            typeEvent: this.eventPage,
          };
          await updateService(service, eventid);
          await setCarDataFromDB();
          document.querySelector('.spinner')?.classList.add('hidden');
          setTimeout(() => {
            this.navigateTo('/');
          }, 1000);
        } else if (btn?.id === 'del--event-service__btn' && eventid) {
          await deleteService(eventid);
          await setCarDataFromDB();
          document.querySelector('.spinner')?.classList.add('hidden');
          setTimeout(() => {
            this.navigateTo('/');
          }, 1000);
        }
      }
      e.preventDefault();
    });
  }

  createHTMLDetalsPopup() {
    return `
    <div id="popup__content" class="popup__content active ">
          <div class="flex flex-col mb-2">
            <span id="popup__title_name" class="popup__title_name">${eventLang().name}</span>
            <input id="popup__inpit_name" class="popup__input_name border-b border-slate" type="text" placeholder="" />
          </div>
          <div class="flex flex-col mb-2">
            <span id=="popup__title_part" class="popup__title_part">${eventLang().part}</span>
            <input id="popup__input_part" class="popup__input_part border-b border-slate" type="text" placeholder="" />
          </div>
          <div class="flex flex-col mb-2">
            <span id=="popup__title_manuf" class="popup__title_manuf">${eventLang().manufacture}</span>
            <input id=="popup__input_manuf" class="popup__input_manuf  border-b border-slate" type="text" placeholder="" />
          </div>
          <div class="popup-total-service flex flex-col mb-4">
            <div class="grid grid-cols-2 mb-2 gap-4">
              <div class="flex flex-col">
                <span id=="popup__title_price" class="popup__title_price">${eventLang().price}</span>
                <input id=="popup__input_price" class="popup__input_price border-b border-slate" type="number" min="0" placeholder="" />
              </div>
              <div class="flex flex-col">
                <span id=="popup__title_quant" class="popup__title_quant">${eventLang().quant}</span>
                <input id=="popup__input_quant" class="popup__input_quant border-b border-slate" type="number" min="0" placeholder="" />
              </div>
            </div>
            <div class="flex flex-col">
              <span id=="popup__title_amount" class="popup__title_amount">${eventLang().amount}</span>
              <input
                id=="popup__input_amount" class="popup__input_amount border-b border-slate"
                type="number" min="0"
                placeholder=""
              />
            </div>
          </div> 
      </div>`;
  }

  createHTMLDetalsDOM(
    detalName: string,
    detalPart: string,
    detalManuf: string,
    quant: string,
    price: string,
    amount: string
  ) {
    return `
      <li id="detals__item" class="detals__item active">
          <div class="detals__item_basic flex justify-between">
            <span class="detals__item_name">${detalName ? detalName : ''}</span>
            <div>
              <span class="detals__item_price">${amount ? amount : ''}</span>
              <span class="detals__item_price-units">${this.setting.currency}</span>
            </div>
          </div>
          <div class="detals__item_sub flex justify-between border-b-2 border-slateBorders">
            <div>
              <span class="detals__item_manuf text-xs">${detalManuf ? detalManuf : ''}</span>
              <span class="detals-part__input text-xs">${detalPart ? `[${detalPart}]` : ''}</span>
            </div>
            <span class="detals-cost__full text-xs">${
              +quant > 1
                ? `[<span class="detals-cost__quant text-xs">${quant}</span> x <span class="detals-cost__price text-xs">${price}</span>${this.setting.currency}]`
                : ''
            }</span>
          </div>
      </li>`;
  }
  createHTMLContainerDetalDOM() {
    return `
          <div class="col-span-2">
            <div
              id="service__detals-add_container"
              class="service__detals-add_container flex items-center justify-between mb-2">
              ${icon.wrench}
              <span id="detals-add__title" class="detals-add__title mb-0">
                Детали
              </span>
              ${renderButton(eventLang().add, 'detals-add__btn', 'detals-add__btn', paramsButton.blueXS)}
            </div>
            <ul id="detals__list" class="detals__list"></ul>
          </div>`;
  }

  createHTMLServiceDOM() {
    return `
                <h2 class="events__title font-bold text-xl mb-7">${eventLang().service}</h2> 
    <form id="main-form service" class="main-form service grid grid-cols-2 gap-8 justify-between h-[34rem]"
    data-mongoID="${this.curID ? this.carData?.event.service.find((e) => e.id === this.curID)?._id : ''}">
            ${collectionServiceArr()
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

  // методы для БЭКА
  async updateBackEnd() {
    document.querySelector('.spinner')?.classList.remove('hidden');

    const worksDetalsArr: IDetals[] = [];
    this.initDetalsDOM();
    for (let i = 0; i < this.detalsNameDOM.length; i += 1) {
      worksDetalsArr.push({
        name: (this.detalsNameDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsNameDOM[i] as HTMLElement)?.textContent as string)
          : '',
        partNumber: (this.detalsPartDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsPartDOM[i] as HTMLElement)?.textContent?.slice(1, -1) as string)
          : '',
        manufacturer: (this.detalsManufDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsManufDOM[i] as HTMLElement)?.textContent as string)
          : '',
        price: (this.detalsPriceDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsPriceDOM[i] as HTMLElement)?.textContent as string)
          : '',
        quantity: (this.detalsQuantyDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsQuantyDOM[i] as HTMLElement)?.textContent as string)
          : '',
        amount: (this.detalsPriceTotalDOM[i] as HTMLElement)?.textContent
          ? ((this.detalsPriceTotalDOM[i] as HTMLElement)?.textContent as string)
          : '',
      });
    }
    const service: IService = {
      date: this.dateDOM.value,
      mileage: this.mileageDOM.value,
      type: this.typeDOM.value,
      name: this.nameDOM.value,
      detals: worksDetalsArr,
      costWorks: this.costWorksDOM.value,
      totalPrice: this.totalPriceService.value,
      place: this.placeDOM.value,
      notes: this.notesDOM.value,
      id: createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0]
        ? `${Date.now().toString()}_${
            createArrPlans(showPlans.allPlans).filter((e) => e.textName === this.nameDOM.value)[0].id
          }`
        : Date.now().toString(),
      typeEvent: this.eventPage,
    };

    const response = await createService(service); // тут будет createRefuel и тд в зависимости от события
    addToBack(response, this.navigateTo, this.addServiceBtn);
  }
}
