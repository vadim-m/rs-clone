import { IService, IDetals, ICarData } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { eventLang } from '../../lang/addEventLang';
import { getMoney } from '../../components/units';
import { buttonLang } from '../../lang/buttonLang';
import { Popup } from '../../components/popup';
import { searchLi } from '../../utilits/searchElement';
import { currentLiArr } from '../../utilits/searchElement';
import { renderButtonBlue } from '../../components/button';
import { onFocus } from '../../utilits/onFocusFunc';
import { paramsCollectionService } from './paramsForLineEvent';
import { lastEvent, updateIndicatirs } from '../../utilits/mathSpend';

export class Service {
  eventPage = 'service';

  serviceEvent: IService | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  detalsNameDOM!: NodeList;
  detalsPartDOM!: NodeList;
  detalsManufDOM!: NodeList;
  detalsAmountDOM!: NodeList;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  detalsPriceDOM!: NodeList;
  detalsQuantyDOM!: NodeList;
  detalsTitleDOM!: HTMLElement;
  detalsBtnDOM!: HTMLElement;
  formService!: HTMLFormElement;
  totalPriceDetals!: HTMLInputElement;
  costWorksDOM!: HTMLInputElement;
  totalPriceTitle!: HTMLElement;
  parent!: HTMLElement;
  pageBody!: HTMLElement;
  allInput!: NodeList;
  detalsListDOM!: HTMLElement;
  addEventCircule: HTMLElement;
  nameItem!: HTMLElement;
  dateDOM!: HTMLInputElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.renderPage();
    this.nameItem = document.querySelector('.service__item_name') as HTMLElement;
    this.renderDetalContainer();
    this.initDOM();
    this.addDetals();
    this.createServiceEvent();
    this.amountServiceAll();
    this.changeDetals();
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.formService = document.querySelector('.main-form') as HTMLFormElement;
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

    this.detalsNameDOM = document.querySelectorAll('.detals-name__input') as NodeList;
    this.detalsPartDOM = document.querySelectorAll('.detals-part__input') as NodeList;
    this.detalsManufDOM = document.querySelectorAll('.detals-manuf__input') as NodeList;
    this.detalsPriceDOM = document.querySelectorAll('.detals-price__input') as NodeList;
    this.detalsQuantyDOM = document.querySelectorAll('.detals-quant__input') as NodeList;
    this.detalsAmountDOM = document.querySelectorAll('.detals-amount__input') as NodeList;

    this.totalPriceDetals = document.querySelector('.service__input_total') as HTMLInputElement;
    this.costWorksDOM = document.querySelector('.service__input_cost-works') as HTMLInputElement;
    this.totalPriceTitle = document.querySelector('.service__title_total') as HTMLElement;
  }

  renderPage() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'none';
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLServiceDOM());
    onFocus(this.eventPage);
  }

  renderDetalContainer() {
    this.nameItem.insertAdjacentHTML('afterend', this.createHTMLContainerDetalDOM());
  }

  changeTotalPriceDetals() {
    const popupDetalPrice = document.querySelector(`.popup__input_price`) as HTMLInputElement;
    const popupDetalQuant = document.querySelector(`.popup__input_quant`) as HTMLInputElement;
    const popupDetalAmount = document.querySelector(`.popup__input_amount`) as HTMLInputElement;
    popupDetalPrice.addEventListener('input', () => {
      if (popupDetalAmount.value !== '') {
        popupDetalQuant.value = String(+popupDetalAmount.value / +popupDetalPrice.value);
        if (popupDetalPrice.value === '') {
          popupDetalQuant.value = '';
        }
      }
      onFocus(this.eventPage);
    });
    popupDetalQuant.addEventListener('input', () => {
      if (popupDetalPrice.value !== '') {
        popupDetalAmount.value = String(+popupDetalPrice.value * +popupDetalQuant.value);
      }
      onFocus(this.eventPage);
    });
    popupDetalAmount.addEventListener('input', () => {
      popupDetalQuant.value = String(+popupDetalAmount.value / +popupDetalPrice.value);
      onFocus(this.eventPage);
    });
  }

  amountServiceAll(): number {
    this.costWorksDOM.addEventListener('change', () => {
      this.totalPriceDetals.value = String(this.amountDetalsAll() + +this.costWorksDOM.value);
      this.totalPriceTitle.style.top = '-1.5rem';
      this.totalPriceTitle.style.color = 'grey';
      this.totalPriceTitle.style.fontSize = '0.8rem';
      return this.totalPriceDetals.value;
    });
    const curServiceAmount = +(document.querySelector('.service__input_total') as HTMLInputElement).value;
    return curServiceAmount;
  }

  amountDetalsAll(): number {
    const allCostDetals = Array.from(document.querySelectorAll('.detals__item_price'));

    if (allCostDetals.length > 0) {
      this.totalPriceDetals.value = String(
        allCostDetals.reduce((acc, e) => {
          return acc + Number((e as HTMLElement).textContent);
        }, 0)
      );
      this.totalPriceTitle.style.top = '-1.5rem';
      this.totalPriceTitle.style.color = 'grey';
      this.totalPriceTitle.style.fontSize = '0.8rem';
      return +this.totalPriceDetals.value;
    } else return 0;
  }

  removePopup() {
    const bgPopup = document.querySelector('.bg__popup--grey') as HTMLElement;
    bgPopup.remove();
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
        const quant = +(document.querySelector(`.popup__input_quant`) as HTMLInputElement).value;
        const price = +(document.querySelector(`.popup__input_price`) as HTMLInputElement).value;
        const popupDOM = document.querySelector('.popup__container') as HTMLElement;
        const allInputPopupArr = Array.from(popupDOM.querySelectorAll('input'));
        if (allInputPopupArr.some((e) => e.value !== '')) {
          this.detalsListDOM.insertAdjacentHTML('beforeend', this.createHTMLDetalsDOM(quant, price));
        }
      }
      this.recalcTotal();
    });
  }

  recalcTotal() {
    this.totalPriceDetals.value = String(this.amountDetalsAll() + +this.costWorksDOM.value);
  }

  changeDetals() {
    this.detalsListDOM.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLElement);
      const currentDetal = currentLiArr[0];
      new Popup(
        this.createHTMLDetalsPopup(),
        buttonLang().delete,
        'confirm__btn--delete',
        'confirm__btn--delete',
        buttonLang().edit,
        'confirm__btn--edit',
        'confirm__btn--edit'
      );
      const popup = document.querySelector('.popup__container');

      const currentDetalName = currentDetal.querySelector('.detals__item_name') as HTMLElement;
      const currentDetalPart = currentDetal.querySelector('.detals-part__input') as HTMLElement;
      const currentDetalManuf = currentDetal.querySelector('.detals__item_manuf') as HTMLElement;
      const currentDetalPrice = currentDetal.querySelector('.detals__item_price') as HTMLElement;
      const currentDetalCostQuant = currentDetal.querySelector('.detals-cost__quant') as HTMLElement;
      const currentDetalCostPrice = currentDetal.querySelector('.detals-cost__price') as HTMLElement;

      const popupDetalName = document.querySelector(`.popup__input_name`) as HTMLInputElement;
      const popupDetalPart = document.querySelector(`.popup__input_part`) as HTMLInputElement;
      const popupDetalManuf = document.querySelector(`.popup__input_manuf`) as HTMLInputElement;
      const popupDetalPrice = document.querySelector(`.popup__input_price`) as HTMLInputElement;
      const popupDetalQuant = document.querySelector(`.popup__input_quant`) as HTMLInputElement;
      const popupDetalAmount = document.querySelector(`.popup__input_amount`) as HTMLInputElement;

      popupDetalName.value = currentDetalName?.textContent as string;
      popupDetalPart.value = currentDetalPart?.textContent?.slice(1, -1) as string;
      popupDetalManuf.value = currentDetalManuf?.textContent as string;
      popupDetalPrice.value = currentDetalCostPrice?.textContent as string;
      popupDetalQuant.value = currentDetalCostQuant?.textContent as string;
      popupDetalAmount.value = currentDetalPrice?.textContent as string;

      this.changeTotalPriceDetals();

      popup?.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          currentDetalName.textContent = popupDetalName.value;
          currentDetalPart.textContent = `${popupDetalPart.value ? `[${popupDetalPart.value}]` : ''}`;
          currentDetalManuf.textContent = popupDetalManuf.value;
          currentDetalPrice.textContent = popupDetalAmount.value;
          currentDetalCostQuant.textContent = popupDetalQuant.value;
          currentDetalCostPrice.textContent = popupDetalPrice.value;
          this.recalcTotal();
        }
      });
    });
  }

  createServiceEvent() {
    const addServiceBtn = document.querySelector('.add--event-service__btn') as HTMLFormElement;
    addServiceBtn.addEventListener('click', (event) => {
      this.initDOM();
      const newCarData: ICarData = localStorage.getItem('car')
        ? JSON.parse(localStorage.getItem('car') as string)
        : carData;
      lastEvent(this.eventPage, newCarData); // обновляем последние события eventTime

      const worksDetalsArr: IDetals[] = [];

      for (let i = 0; i < this.detalsNameDOM.length; i += 1) {
        worksDetalsArr.push({
          detals: {
            name: (this.detalsNameDOM[i] as HTMLInputElement).value,
            partNumber: (this.detalsPartDOM[i] as HTMLInputElement).value,
            manufacturer: (this.detalsManufDOM[i] as HTMLInputElement).value,
            price: Number((this.detalsPriceDOM[i] as HTMLInputElement).value),
            quantity: Number((this.detalsQuantyDOM[i] as HTMLInputElement).value),
            amount: Number((this.detalsAmountDOM[i] as HTMLInputElement).value),
          },
        });
      }

      this.serviceEvent = {
        date: this.dateDOM.value,
        mileage: +this.mileageDOM.value,
        type: this.typeDOM.value,
        name: this.nameDOM.value,
        detals: worksDetalsArr,
        amount: this.amountServiceAll(),
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      };
      newCarData.event.service.push(this.serviceEvent);

      updateIndicatirs(this.eventPage, newCarData); // обновляем все индикаторы

      localStorage.setItem('car', JSON.stringify(newCarData));
      event.preventDefault();
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

  createHTMLDetalsDOM(quant: number, price: number) {
    const popupDetalName = document.querySelector(`.popup__input_name`) as HTMLInputElement;
    const popupDetalPart = document.querySelector(`.popup__input_part`) as HTMLInputElement;
    const popupDetalManuf = document.querySelector(`.popup__input_manuf`) as HTMLInputElement;
    return `
      <li id="detals__item" class="detals__item active">
          <div class="detals__item_basic flex justify-between">
            <span class="detals__item_name">${popupDetalName.value ? popupDetalName.value : ''}</span>
            <div>
              <span class="detals__item_price">${price ? (quant >= 1 ? quant : 1) * price : ''}</span>
              <span class="detals__item_price-units">${getMoney('BY')?.slice(2)}</span>
            </div>
          </div>
          <div class="detals__item_sub flex justify-between border-b-2 border-slateBorders">
            <div>
              <span class="detals__item_manuf text-xs">${popupDetalManuf.value ? popupDetalManuf.value : ' '}</span>
              <span class="detals-part__input text-xs">${
                popupDetalPart.value ? `[${popupDetalPart.value}]` : ' '
              }</span>
            </div>
            <span class="detals-cost__full text-xs">${
              quant > 1
                ? `[<span class="detals-cost__quant text-xs">${quant}</span> x <span class="detals-cost__price text-xs">${price}</span>${getMoney(
                    'BY'
                  )?.slice(1)}]`
                : ' '
            }</span>
          </div>
      </li>`;
  }
  createHTMLContainerDetalDOM() {
    return `
          <div class="col-span-2">
            <div
              id="service__detals-add_container"
              class="service__detals-add_container flex items-center justify-between">
              ${icon.wrench}
              <span id="detals-add__title" class="detals-add__title mb-0">
                Детали
              </span>
              ${renderButtonBlue(eventLang().add, 'detals-add__btn', 'detals-add__btn', '1/2')}
            </div>
            <ul id="detals__list" class="detals__list"></ul>
          </div>`;
  }

  createHTMLServiceDOM() {
    return `
                <h2 class="events__title font-bold text-xl mb-7">${eventLang().service}</h2> 
    <form id="main-form service" class="main-form service grid grid-cols-2 gap-8 justify-between h-[34rem]" action="/" method="put">
            ${paramsCollectionService
              .map((obj) => {
                return lineOfEvent(this.eventPage, obj);
              })
              .join('')}
          ${renderButtonBlue(
            eventLang().addEvent,
            'add--event-service__btn col-span-2',
            'add--event-service__btn',
            'full'
          )}
      </form>`;
  }
}
