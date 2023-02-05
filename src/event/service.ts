import { IService, IDetals } from '../types';
import { carData } from '../car/car_data';

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

  constructor() {
    this.initDOM();
    this.addDetals();
    this.createServiceEvent();
    this.onFocus();
    this.amountServiceAll();
  }

  initDOM() {
    this.page = document.querySelector('.page') as HTMLElement;
    this.formService = document.querySelector('#main-form--service') as HTMLFormElement;
    this.mileageDOM = document.querySelector('#milage--service__input') as HTMLInputElement;
    this.typeDOM = document.querySelector('#type--service__input') as HTMLInputElement;
    this.nameDOM = document.querySelector('#name--service__input') as HTMLInputElement;
    this.detalsNameDOM = document.querySelectorAll('.detals-name--service__input') as NodeList;
    this.detalsPartDOM = document.querySelectorAll('.detals-part--service__input') as NodeList;
    this.detalsManufDOM = document.querySelectorAll('.detals-manuf--service__input') as NodeList;
    this.detalsPriceDOM = document.querySelectorAll('.detals-price--service__input') as NodeList;
    this.detalsQuantyDOM = document.querySelectorAll('.detals-quant--service__input') as NodeList;
    this.detalsAmountDOM = document.querySelectorAll('.detals-amount--service__input') as NodeList;
    this.placeDOM = document.querySelector('#place--service__input') as HTMLInputElement;
    this.notesDOM = document.querySelector('#notes--service__input') as HTMLInputElement;
    this.detalsTitleDOM = document.querySelector('#detals--add__title') as HTMLElement;
    this.detalsBtnDOM = document.querySelector('#detals--add__btn') as HTMLElement;
    this.totalPriceDetals = document.querySelector('#total--service__input') as HTMLInputElement;
    this.costWorksDOM = document.querySelector('#cost-works--service__input') as HTMLInputElement;
    this.totalPriceTitle = document.querySelector('.total--service__title') as HTMLElement;
  }

  onFocus() {
    this.formService.addEventListener('focusout', function (event) {
      if ((event.target as HTMLInputElement).matches('.service__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.line--service') as HTMLElement;
        const titleLine = lineParent.querySelector('.service__title') as HTMLElement;
        if (curInput.value === '') {
          titleLine.style.top = '0';
        }
      }
    });
    this.formService.addEventListener('focusin', function (event) {
      if ((event.target as HTMLInputElement).matches('.service__input')) {
        const curInput = event.target as HTMLInputElement;
        const lineParent = curInput.closest('.line--service') as HTMLElement;
        const titleLine = lineParent.querySelector('.service__title') as HTMLElement;
        titleLine.style.top = '-1rem';
      }
    });
  }

  changeTotalPrice(additionID: number) {
    const popupDetalPrice = document.querySelector(`#popup-price--service__input-${additionID}`) as HTMLInputElement;
    const popupDetalQuant = document.querySelector(`#popup-quant--service__input-${additionID}`) as HTMLInputElement;
    const popupDetalAmount = document.querySelector(`#popup-amount--service__input-${additionID}`) as HTMLInputElement;
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
    const curServiceAmount = +(document.querySelector('#total--service__input') as HTMLInputElement).value;
    return curServiceAmount;
  }

  amountDetalsAll(): number {
    const allCostDetals = Array.from(document.querySelectorAll('.detals-cost--service__input'));

    if (allCostDetals.length > 0) {
      this.totalPriceDetals.value = String(
        allCostDetals.reduce((acc, e) => {
          return acc + Number((e as HTMLElement).textContent);
        }, 0) + +this.costWorksDOM.value
      );
      this.totalPriceTitle.style.top = '-1rem';
      return +this.totalPriceDetals.value;
    } else return 0;
  }

  addDetals() {
    const bgPopup = document.querySelector('.bg--grey') as HTMLElement;

    function removePopup() {
      const popupDOM = document.querySelector('.popup__content') as HTMLElement;
      bgPopup.classList.remove('active');
      popupDOM?.remove();
    }

    this.detalsTitleDOM.addEventListener('click', () => {
      this.detalsBtnDOM.style.display = 'block';
    });
    let additionID = 1;
    this.detalsBtnDOM.addEventListener('click', (event) => {
      event.preventDefault();
      bgPopup.classList.add('active');
      bgPopup.insertAdjacentHTML('beforeend', this.createHTMLWorksDetalsPopup(additionID));
      this.changeTotalPrice(additionID);
      const popupDOM = document.querySelector('.popup__content') as HTMLElement;
      popupDOM?.classList.add('active');
    });

    bgPopup.addEventListener('click', (event) => {
      if (
        (event.target as HTMLInputElement).matches('.bg--grey') ||
        (event.target as HTMLElement).matches('.confirm--cencel__btn')
      ) {
        removePopup();
      }
      if ((event.target as HTMLElement).matches('.confirm--ok__btn')) {
        const quant = +(document.querySelector(`#popup-quant--service__input-${additionID}`) as HTMLInputElement).value;
        const price = +(document.querySelector(`#popup-price--service__input-${additionID}`) as HTMLInputElement).value;
        const popupDOM = document.querySelector('.popup__content') as HTMLElement;
        const allInputPopupArr = Array.from(popupDOM.querySelectorAll('input'));

        if (allInputPopupArr.some((e) => e.value !== '')) {
          this.detalsBtnDOM.insertAdjacentHTML('beforebegin', this.createHTMLWorksDetalsDOM(additionID, quant, price));
          additionID += 1;
        }
        this.amountDetalsAll();
        removePopup();
      }
    });
  }

  createServiceEvent() {
    const addServiceBtn = document.querySelector('#add--event-service__btn') as HTMLFormElement;
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

  createHTMLWorksDetalsPopup(additionID: number) {
    return `
    <div id="popup__content-${additionID}" class="popup__content active">
          <p>
            <label for="popup-name--service__input-${additionID}">Название</label>
            <input id="popup-name--service__input-${additionID}" class="popup-name--service__input" type="text" placeholder="" />
          </p>
          <p>
            <label for="popup-part--service__input-${additionID}">Номер</label>
            <input id="popup-part--service__input-${additionID}" class="popup-part--service__input" type="text" placeholder="" />
          </p>
          <p>
            <label for="popup-manuf--service__input-${additionID}">Произвоитель</label>
            <input id="popup-manuf--service__input-${additionID}" class="popup-manuf--service__input" type="text" placeholder="" />
          </p>
          <form class="popup-total--service">
            <label for="popup-price--service__input-${additionID}">Цена</label>
            <input id="popup-price--service__input-${additionID}" class="popup-price--service__input" type="number" min="0" placeholder="" />
            <label for="popup-quant--service__input-${additionID}">Количество</label>
            <input id="popup-quant--service__input-${additionID}" class="popup-quant--service__input" type="number" min="0" placeholder="" />
            <label for="popup-amount--service__input-${additionID}">Сумма</label>
            <input
              id="popup-amount--service__input-${additionID}"
              class="popup-amount--service__input"
              type="number" min="0"
              placeholder=""
            />
          </form>

        <div class="popup--confirm__content">
          <div class="confirm--cencel__btn">ОТМЕНА</div>
          <div class="confirm--ok__btn">ОК</div>
        </div>
      </div>`;
  }

  createHTMLWorksDetalsDOM(additionID: number, quant: number, price: number) {
    const popupDetalName = document.querySelector(`#popup-name--service__input-${additionID}`) as HTMLInputElement;
    const popupDetalPart = document.querySelector(`#popup-part--service__input-${additionID}`) as HTMLInputElement;
    const popupDetalManuf = document.querySelector(`#popup-manuf--service__input-${additionID}`) as HTMLInputElement;
    return `
      <div id="detals__content-${additionID}" class="detals__content active">
          <div>
            <p id="detals-name--service__input-${additionID}" class="detals-name--service__input"">${
      popupDetalName.value ? popupDetalName.value : ''
    }</p>
            <p id="detals-part--service__input-${additionID}" class="detals-part--service__input">${
      popupDetalPart.value ? popupDetalPart.value : ''
    }</p>
            <p id="detals-manuf--service__input-${additionID}" class="detals-manuf--service__input">${
      popupDetalManuf.value ? popupDetalManuf.value : ''
    }</p>
          </div>
          <div>
            ${
              quant > 1
                ? `<p id="detals-cost--service__text-${additionID}" class="detals-cost--service__text">
                  ${quant} x ${price}
                </p>`
                : ''
            }
            <p id="detals-cost--service__input-${additionID}" class="detals-cost--service__input">${
      price ? (quant >= 1 ? quant : 1) * price : ''
    }</p>
          </div>
      </div>`;
  }
}
