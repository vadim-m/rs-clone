import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';
import { INewCar } from '../../types';
import { CarForm } from './CarForm';
import { addCar } from '../../helpers/api';

export class HomePage {
  private info: DocumentFragment;
  private plans: DocumentFragment;
  private events: DocumentFragment;
  private carForm: DocumentFragment;
  private hasCar: boolean;
  private hiddenFormSectionClass: string;
  parent: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.hasCar = false;
    this.info = new Info().element;
    this.plans = new Plans().element;
    this.events = new Events().element;
    this.carForm = new CarForm(this.hasCar).element;
    this.hiddenFormSectionClass = this.hasCar ? 'hidden' : '';
    this.createElement();
    this.addListeners();
  }

  createElement() {
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

      const newCarData: INewCar = {
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

      await addCar(newCarData);
    });
  }
}
