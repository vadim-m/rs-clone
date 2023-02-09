import { IService, IDetals } from '../../types';
import { carData } from '../../car/car_data';
import { lineOfEvent } from '../../components/lineEvent';
import { icon } from '../../components/iconObj';
import { serviceLang } from '../../components/lang/serviceLang';
import { getMoney } from '../../components/units';
import { buttonLang } from '../../components/lang/buttonLang';
import { Popup } from '../../components/popup';
import { searchLi } from '../../components/searchElement';
import { currentLiArr } from '../../components/searchElement';

export class Service {
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
  page!: HTMLElement;
  bgPopup!: HTMLElement;
  totalPriceDetals!: HTMLInputElement;
  costWorksDOM!: HTMLInputElement;
  totalPriceTitle!: HTMLElement;
  parent!: HTMLElement;
  pageBody!: HTMLElement;
  allInput!: NodeList;
  detalsListDOM!: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.renderPage();
    this.initDOM();
    this.addDetals();
    this.createServiceEvent();
    this.onFocus();
    this.amountServiceAll();
    this.changeDetals();
  }

  initDOM() {
    this.pageBody = document.querySelector('body') as HTMLElement;
    this.formService = document.querySelector('.main-form') as HTMLFormElement;
    this.mileageDOM = document.querySelector('#service__input_mileage') as HTMLInputElement;
    this.typeDOM = document.querySelector('#service__input_type') as HTMLInputElement;
    this.nameDOM = document.querySelector('#service__input_name') as HTMLInputElement;
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

  // initDOMPopup () {

  // }

  renderPage() {
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLServiceDOM());
  }

  onFocus() {
    const allInputArr: HTMLInputElement[] = [...this.formService.querySelectorAll('input')];
    const allTitleArr: HTMLElement[] = Array.from(this.formService.querySelectorAll('.service__title'));

    allInputArr.forEach((eI) => {
      if (eI.value.length > 0) {
        allTitleArr.forEach((eT) => {
          if (eI.id.slice(15) === eT.id.slice(15)) {
            eT.style.top = '-1rem';
          }
        });
      }
    });

    this.formService.addEventListener('focusout', function (event) {
      if ((event.target as HTMLInputElement).matches('.service__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.service__item') as HTMLElement;
        const titleLine = lineParent.querySelector('.service__title') as HTMLElement;
        if (curInput.value === '') {
          titleLine.style.top = '0';
        }
      }
    });
    this.formService.addEventListener('focusin', function (event) {
      if ((event.target as HTMLInputElement).matches('.service__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.service__item') as HTMLElement;
        const titleLine = lineParent.querySelector('.service__title') as HTMLElement;
        titleLine.style.top = '-1rem';
      }
    });
  }

  changeTotalPriceDetals() {
    const popupDetalPrice = document.querySelector(`.popup__input_price`) as HTMLInputElement;
    const popupDetalQuant = document.querySelector(`.popup__input_quant`) as HTMLInputElement;
    const popupDetalAmount = document.querySelector(`.popup__input_amount`) as HTMLInputElement;
    popupDetalPrice.addEventListener('input', () => {
      if (popupDetalQuant.value === '') {
        popupDetalAmount.value = String(+popupDetalPrice.value * 1);
        popupDetalQuant.value = '1';
      } else {
        popupDetalAmount.value = String(+popupDetalPrice.value * +popupDetalQuant.value);
      }
    });
    popupDetalQuant.addEventListener('input', () => {
      if (popupDetalQuant.value !== '' && popupDetalPrice.value === '') {
        popupDetalPrice.value = String(+popupDetalAmount.value / +popupDetalQuant.value);
      }
      if (popupDetalQuant.value === '') {
        popupDetalAmount.value = String(+popupDetalPrice.value * 1);
      } else {
        popupDetalAmount.value = String(+popupDetalPrice.value * +popupDetalQuant.value);
      }
    });
    popupDetalAmount.addEventListener('change', () => {
      if (popupDetalQuant.value === '' && popupDetalPrice.value !== '') {
        popupDetalQuant.value = String(+popupDetalAmount.value / +popupDetalPrice.value);
      }
      if (popupDetalAmount.value === '') {
        popupDetalAmount.value = String(+popupDetalPrice.value * +popupDetalQuant.value);
      } else {
        popupDetalQuant.value = String(+popupDetalQuant.value ? +popupDetalQuant.value : 1);
        popupDetalPrice.value = String(+popupDetalAmount.value / (+popupDetalQuant.value ? +popupDetalQuant.value : 1));
      }
    });
  }

  amountServiceAll(): number {
    this.costWorksDOM.addEventListener('change', () => {
      this.totalPriceDetals.value = String(this.amountDetalsAll() + +this.costWorksDOM.value);
      this.totalPriceTitle.style.top = '-1rem';
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
      this.totalPriceTitle.style.top = '-1rem';
      return +this.totalPriceDetals.value;
    } else return 0;
  }

  removePopup() {
    const bgPopup = document.querySelector('.bg__popup--grey') as HTMLElement;
    bgPopup.remove();
    // (bgPopup as HTMLElement).classList.remove('active');
  }

  addDetals() {
    this.detalsBtnDOM.addEventListener('click', (event) => {
      event.preventDefault();
      new Popup(
        this.createHTMLDetalsPopup(),
        buttonLang().cencel,
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
    let additionID = 0;
    this.pageBody.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).matches('.confirm__btn--ok')) {
        const quant = +(document.querySelector(`.popup__input_quant`) as HTMLInputElement).value;
        const price = +(document.querySelector(`.popup__input_price`) as HTMLInputElement).value;
        const popupDOM = document.querySelector('.popup__container') as HTMLElement;
        const allInputPopupArr = Array.from(popupDOM.querySelectorAll('input'));
        additionID += 1;
        if (allInputPopupArr.some((e) => e.value !== '')) {
          this.detalsListDOM.insertAdjacentHTML('beforeend', this.createHTMLDetalsDOM(additionID, quant, price));
        }
        this.amountDetalsAll();

        this.totalPriceDetals.value = String(this.amountDetalsAll() + +this.costWorksDOM.value);
        // this.removePopup();
      }
    });
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
      const currentDetalName = currentDetal.querySelector('.detals__item_name') as HTMLElement;
      const currentDetalPart = currentDetal.querySelector('.detals-part__input') as HTMLElement;
      const currentDetalManuf = currentDetal.querySelector('.detals__item_manuf') as HTMLElement;
      const currentDetalPrice = currentDetal.querySelector('.detals__item_price') as HTMLElement;
      const currentDetalCostQuant = currentDetal.querySelector('.detals-cost__quant') as HTMLElement;
      const currentDetalCostPrice = currentDetal.querySelector('.detals-cost__price') as HTMLElement;

      (document.querySelector(`.popup__input_name`) as HTMLInputElement).value =
        currentDetalName?.textContent as string;
      (document.querySelector(`.popup__input_part`) as HTMLInputElement).value = currentDetalPart?.textContent?.slice(
        1,
        -1
      ) as string;
      (document.querySelector(`.popup__input_manuf`) as HTMLInputElement).value =
        currentDetalManuf?.textContent as string;
      (document.querySelector(`.popup__input_price`) as HTMLInputElement).value =
        currentDetalPrice?.textContent as string;
      (document.querySelector(`.popup__input_quant`) as HTMLInputElement).value =
        currentDetalCostQuant?.textContent as string;
      (document.querySelector(`.popup__input_amount`) as HTMLInputElement).value =
        currentDetalCostPrice?.textContent as string;
      this.changeTotalPriceDetals();

      this.pageBody.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          currentDetalName.textContent = (document.querySelector(`.popup__input_name`) as HTMLInputElement).value;
          currentDetalPart.textContent = (document.querySelector(`.popup__input_part`) as HTMLInputElement).value;
          currentDetalManuf.textContent = (document.querySelector(`.popup__input_manuf`) as HTMLInputElement).value;
          currentDetalPrice.textContent = (document.querySelector(`.popup__input_price`) as HTMLInputElement).value;
          currentDetalCostQuant.textContent = (document.querySelector(`.popup__input_quant`) as HTMLInputElement).value;
          currentDetalCostPrice.textContent = (
            document.querySelector(`.popup__input_amount`) as HTMLInputElement
          ).value;
        }
      });
    });
  }

  createServiceEvent() {
    const addServiceBtn = document.querySelector('.add--event-service__btn') as HTMLFormElement;
    addServiceBtn.addEventListener('click', (event) => {
      this.initDOM();
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

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const newCarData = JSON.parse(localStorage.getItem('car')!) ? JSON.parse(localStorage.getItem('car')!) : carData;

      newCarData.event.service.push({
        date: new Date().toLocaleString(),
        mileage: Number(this.mileageDOM.value),
        type: this.typeDOM.value,
        name: this.nameDOM.value,
        worksDetals: worksDetalsArr,
        amount: this.amountServiceAll(),
        place: this.placeDOM.value,
        notes: this.notesDOM.value,
        id: Date.now().toString(),
      });
      localStorage.setItem('car', JSON.stringify(newCarData));
      // formDervice.submit();
      // console.log(carData);
      event.preventDefault();
    });
  }

  createHTMLDetalsPopup() {
    return `
    <div id="popup__content" class="popup__content active">
          <div>
            <span id="popup__title_name" class="popup__title_name">${serviceLang().name}</span>
            <input id="popup__inpit_name" class="popup__input_name" type="text" placeholder="" />
          </div>
          <div>
            <span id=="popup__title_part" class="popup__title_part">${serviceLang().part}</span>
            <input id="popup__input_part" class="popup__input_part" type="text" placeholder="" />
          </div>
          <div>
            <span id=="popup__title_manuf" class="popup__title_manuf">${serviceLang().manufacture}</span>
            <input id=="popup__input_manuf" class="popup__input_manuf" type="text" placeholder="" />
          </div>
          <div class="popup-total-service">
            <span id=="popup__title_price" class="popup__title_price">${serviceLang().price}</span>
            <input id=="popup__input_price" class="popup__input_price" type="number" min="0" placeholder="" />
            <span id=="popup__title_quant" class="popup__title_quant">${serviceLang().quant}</span>
            <input id=="popup__input_quant" class="popup__input_quant" type="number" min="0" placeholder="" />
            <span id=="popup__title_amount" class="popup__title_amount">${serviceLang().amount}</span>
            <input
              id=="popup__input_amount" class="popup__input_amount"
              type="number" min="0"
              placeholder=""
            />
          </div>
      </div>`;
  }

  createHTMLDetalsDOM(additionID: number, quant: number, price: number) {
    const popupDetalName = document.querySelector(`.popup__input_name`) as HTMLInputElement;
    const popupDetalPart = document.querySelector(`.popup__input_part`) as HTMLInputElement;
    const popupDetalManuf = document.querySelector(`.popup__input_manuf`) as HTMLInputElement;
    return `
      <li id="detals__item_${additionID}" class="detals__item active">
          <div class="detals__item_basic">
            <span class="detals__item_name">${popupDetalName.value ? popupDetalName.value : ''}</span>
            <div>
              <span class="detals__item_price">${price ? (quant >= 1 ? quant : 1) * price : ''}</span>
              <span class="detals__item_price-units">${getMoney('BY')?.slice(2)}</span>
            </div>
          </div>
          <div class="detals__item_sub">
            <div>
              <span class="detals__item_manuf"">${popupDetalManuf.value ? popupDetalManuf.value : ''}</span>
              <span class="detals-part__input">${popupDetalPart.value ? `[${popupDetalPart.value}]` : ''}</span>
            </div>
            <span class="detals-cost__full">${
              quant > 1
                ? `[<span class="detals-cost__quant">${quant}</span> x <span class="detals-cost__price">${price}</span>${getMoney(
                    'BY'
                  )?.slice(1)}]`
                : ''
            }</span>
          </div>
      </li>`;
  }

  createHTMLServiceDOM() {
    return `<form id="main-form service" class="main-form service" action="/" method="put">
      ${lineOfEvent('service', 'type', serviceLang().type, icon.gear, 'text')}
      ${lineOfEvent('service', 'name', serviceLang().name, icon.pen, 'text')}
        <div id="service__detals-add_container" class="service__detals-add_container">
            ${icon.wrench}
          <span id="detals-add__title" class="detals-add__title">
            Детали
          </span>
          <ul id="detals__list" class="detals__list"></ul>
          <button id="detals-add__btn" class="detals-add__btn">
            ${icon.plus}
          </button>
        </div>
        <div id="service__total_container" class="service__total_container">
              ${lineOfEvent('service', 'cost-works', serviceLang().costWorks, icon.cost, 'number', getMoney('BY'))}
                ${lineOfEvent('service', 'total', serviceLang().amount, icon.wallet, 'number', getMoney('BY'))}
        </div>
        <div id="service__time_container" class="service__time_container">
                ${lineOfEvent(
                  'service',
                  'date',
                  serviceLang().date,
                  icon.date,
                  'datetime-local',
                  '',
                  `${new Date().toISOString().slice(0, 16)}`
                )}
                ${lineOfEvent('service', 'mileage', serviceLang().mileage, icon.mileage, 'number')}
        </div>
          ${lineOfEvent('service', 'place', serviceLang().place, icon.place, 'text')}
          ${lineOfEvent('service', 'notes', serviceLang().comments, icon.comments, 'text')}
        <button id="add--event-service__btn" type="submit">
          Добавить событие
        </button>
      </form>`;
  }
}
