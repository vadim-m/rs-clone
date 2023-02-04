import { IService, IWorksDetals } from '../types';
import { carData } from '../car/car_data';

export class Service {
  serviceEvent: IService | undefined;
  mileageDOM!: HTMLInputElement;
  typeDOM!: HTMLInputElement;
  nameDOM!: HTMLInputElement;
  worksNameDOM!: NodeList;
  worksCostDOM!: NodeList;
  detalsNameDOM!: NodeList;
  detalsPartDOM!: NodeList;
  detalsManufDOM!: NodeList;
  detalsAmountDOM!: NodeList;
  placeDOM!: HTMLInputElement;
  notesDOM!: HTMLInputElement;
  detalsPriceDOM!: NodeList;
  detalsQuantyDOM!: NodeList;
  worksDetalsTitleDOM!: HTMLElement;
  worksDetalsBtnDOM!: HTMLElement;

  constructor() {
    this.initDOM();
    this.addWorksDetals();
    this.createServiceEvent();
  }

  // amountServiceAll(): number {
  //   return carData.event.service.reduce((acc: number, el): number => {
  //     return acc + el.amount;
  //   }, 0);
  // }
  initDOM() {
    this.mileageDOM = document.querySelector('#milage--service__input') as HTMLInputElement;
    this.typeDOM = document.querySelector('#type--service__input') as HTMLInputElement;
    this.nameDOM = document.querySelector('#name--service__input') as HTMLInputElement;
    this.worksNameDOM = document.querySelectorAll('.work-name--service__input') as NodeList;
    this.worksCostDOM = document.querySelectorAll('.work-cost--service__input') as NodeList;
    this.detalsNameDOM = document.querySelectorAll('.detals-name--service__input') as NodeList;
    this.detalsPartDOM = document.querySelectorAll('.detals-part--service__input') as NodeList;
    this.detalsManufDOM = document.querySelectorAll('.detals-manuf--service__input') as NodeList;
    this.detalsPriceDOM = document.querySelectorAll('.detals-price--service__input') as NodeList;
    this.detalsQuantyDOM = document.querySelectorAll('.detals-quant--service__input') as NodeList;
    this.detalsAmountDOM = document.querySelectorAll('.detals-amount--service__input') as NodeList;
    this.placeDOM = document.querySelector('#place--service__input') as HTMLInputElement;
    this.notesDOM = document.querySelector('#notes--service__input') as HTMLInputElement;
    this.worksDetalsTitleDOM = document.querySelector('#works-detals--add__title') as HTMLElement;
    this.worksDetalsBtnDOM = document.querySelector('#works-detals--add__btn') as HTMLElement;
  }
  addWorksDetals() {
    this.worksDetalsTitleDOM.addEventListener('click', () => {
      this.worksDetalsBtnDOM.style.display = 'block';
    });
    let additionID = 1;
    this.worksDetalsBtnDOM.addEventListener('click', (event) => {
      event.preventDefault();
      this.worksDetalsBtnDOM.insertAdjacentHTML('beforebegin', this.createHTMLWorksDetals(additionID));
      additionID += 1;
    });
  }

  createServiceEvent() {
    const addServiceBtn = document.querySelector('#add--event-service__btn') as HTMLFormElement;
    addServiceBtn.addEventListener('click', (event) => {
      this.initDOM();
      // const formDervice = document.querySelector('#main-form--service') as HTMLFormElement;
      const worksDetalsArr: IWorksDetals[] = [];
      const curServiceAmount = Array.from(this.detalsAmountDOM).reduce((acc, e) => {
        return acc + Number(e.textContent);
      }, 0);
      const lengthWorksOrDetals =
        this.detalsNameDOM.length > this.worksNameDOM.length ? this.detalsNameDOM.length : this.worksNameDOM.length;
      console.log(lengthWorksOrDetals);
      for (let i = 0; i < lengthWorksOrDetals; i += 1) {
        console.log((this.worksNameDOM[i] as HTMLInputElement).value);
        worksDetalsArr.push({
          works: {
            name: (this.worksNameDOM[i] as HTMLInputElement).value,
            cost: Number((this.worksCostDOM[i] as HTMLInputElement).value),
          },
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
        amount: curServiceAmount,
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

  createHTMLWorksDetals(additionID: number) {
    return `<div id="works-detals__content-${additionID}" class="works-detals__content">
        <h3>Деталь</h3>
        <p>
          <label for="detals-name--service__input-${additionID}">Название</label>
          <input id="detals-name--service__input-${additionID}" class="detals-name--service__input" type="text" placeholder="" />
        </p>
        <p>
          <label for="detals-part--service__input-${additionID}">Номер</label>
          <input id="detals-part--service__input-${additionID}" class="detals-part--service__input" type="text" placeholder="" />
        </p>
        <p>
          <label for="detals-manuf--service__input-${additionID}">Произвоитель</label>
          <input id="detals-manuf--service__input-${additionID}" class="detals-manuf--service__input" type="text" placeholder="" />
        </p>
        <p>
          <label for="detals-price--service__input-${additionID}">Цена</label>
          <input id="detals-price--service__input-${additionID}" class="detals-price--service__input" type="text" placeholder="" />
          <label for="detals-quant--service__input-${additionID}">Количество</label>
          <input id="detals-quant--service__input-${additionID}" class="detals-quant--service__input" type="text" placeholder="" />
          <label for="detals-amount--service__input-${additionID}">Сумма</label>
          <input
            id="detals-amount--service__input-${additionID}"
            class="detals-amount--service__input"
            type="text"
            placeholder=""
          />
        </p>
        <h3>Работа</h3>
        <p>
          <label for="name--service__input-${additionID}">Название</label>
          <input id="work-name--service__input-${additionID}" class="work-name--service__input" type="text" placeholder="" />
        </p>
        <p>
          <label for="work-cost--service__input-${additionID}">Стоимость</label>
          <input id="work-cost--service__input-${additionID}" class="work-cost--service__input" type="text" placeholder="" />
        </p>
      </div>`;
  }
}
