import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';
import { ICar } from '../../types';
import { CarForm } from './CarForm';
import { createCar, getCar } from '../../helpers/api';

export class HomePage {
  private info: DocumentFragment | null;
  private plans: DocumentFragment | null;
  private events: DocumentFragment | null;
  private carForm: DocumentFragment | null;
  private hasCar: boolean;
  private car: ICar | null;
  private hiddenFormSectionClass: string | null;
  parent: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.hasCar = false;
    this.car = null;
    this.info = null;
    this.plans = null;
    this.events = null;
    this.carForm = null;
    this.hiddenFormSectionClass = null;

    this.createElement();
    this.addListeners();
  }

  setCarData(car: ICar) {
    this.hasCar = true;
    this.car = car;
    console.log('установить');
  }

  async loadCarData() {
    const res = await getCar();
    const status = res.status;
    const data: ICar = await res.json();
    if (status === 200) {
      this.setCarData(data);
    }
  }

  async createElement() {
    await this.loadCarData();
    this.info = new Info().element;
    this.plans = new Plans().element;
    this.events = new Events().element;
    this.carForm = new CarForm(this.hasCar, this.car).element;
    this.hiddenFormSectionClass = this.hasCar ? 'hidden' : '';

    console.log('рендер');
    if (!this.hasCar) {
      const formSection = document.createElement('section');
      formSection.className = `car-form`;
      formSection.append(this.carForm);

      this.parent.append(formSection);
      return;
    }
    const formSection = document.createElement('section');
    formSection.className = `car-form ${this.hiddenFormSectionClass}`;
    formSection.append(this.carForm);

    const infoSection = document.createElement('section');
    infoSection.classList.add('info');
    infoSection.append(this.info);

    const plansSection = document.createElement('section');
    plansSection.classList.add('plans');
    plansSection.append(this.plans);

    const eventsSection = document.createElement('section');
    eventsSection.classList.add('events');
    eventsSection.append(this.events);

    this.parent.append(formSection, infoSection, plansSection, eventsSection);
  }

  addListeners() {
    const form = document.querySelector('#car-form') as HTMLFormElement;

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.querySelector('#car-btn') as HTMLFormElement;
      submitBtn.disabled = true;

      const brand = form.brand as HTMLInputElement;
      const model = form.model as HTMLInputElement;
      const year = form.year as HTMLInputElement;
      const fuel = form.fuel as HTMLInputElement;
      const mileage = form.mileage as HTMLInputElement;
      const sizeTank = form.sizeTank as HTMLInputElement;
      const engine = form.engine as HTMLInputElement;
      const sizeEngine = form.sizeEngine as HTMLInputElement;
      const powerEngine = form.powerEngine as HTMLInputElement;

      const carData: ICar = {
        brand: brand.value,
        model: model.value,
        year: year.value,
        fuel: fuel.value,
        mileage: mileage.value,
        sizeTank: sizeTank.value,
        engineType: engine.value,
        engineDisplacement: sizeEngine.value,
        enginePower: powerEngine.value,
      };

      const res = await createCar(carData);
      const status = res.status;
      const data = await res.json();

      // log
      console.log(status, data);

      console.log('get');

      // console.log(await (await getCar(data._id)).json());

      // if (this.hasCar) {
      //   // await updateCar(newCarData);
      // } else {
      //   await addCar(newCarData);
      // }
    });
  }
}
