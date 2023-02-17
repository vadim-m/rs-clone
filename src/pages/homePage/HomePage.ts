import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';
import { INewCar } from '../../types';
import { AddNewCar } from './AddNewCar';
import { addCar } from '../../helpers/api';
import { fixLength } from '../../helpers/api';

export class HomePage {
  private info = new Info().element;
  private plans = new Plans().element;
  private events = new Events().element;
  private addCar = new AddNewCar().element;
  private isCar = false;
  parent: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.isCar ? this.createElement() : this.createAddCarForm();
    this.addListeners();
  }

  createElement() {
    const info = document.createElement('section');
    info.classList.add('info');
    info.append(this.info);

    const plans = document.createElement('section');
    plans.classList.add('plans');
    plans.append(this.plans);

    const events = document.createElement('section');
    events.classList.add('events');
    events.append(this.events);

    this.parent.append(info, plans, events);
  }

  createAddCarForm() {
    const form = document.createElement('section');
    form.className = 'add-car-form';
    form.append(this.addCar);

    this.parent.append(form);
  }

  addListeners() {
    const form = document.querySelector('#add-form') as HTMLFormElement;
    //form.noValidate = true;
    //const inputs = form.querySelectorAll('input');
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      // for (let i = 0; i < inputs.length; i++) {
      //   inputs[i];
      //   if (!inputs[i].checkValidity()) {
      //     const parent = inputs[i].closest('.add-car-form__required') as HTMLDivElement;
      //     const alert = parent.querySelector('p');
      //     alert?.classList.remove('hidden');
      //   }
      // }

      const submitBtn = document.querySelector('#add-car-btn') as HTMLFormElement;
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

      year.addEventListener('input', fixLength);

      const newCarData: INewCar = {
        brand: brand.value,
        model: model.value,
        year: year.value,
        fuel: fuel.value,
        mileage: mileage.value,
        sizeTank: sizeTank.value,
        engine: engine.value,
        sizeEngine: sizeEngine.value,
        powerEngine: powerEngine.value,
      };

      await addCar(newCarData);
    });
  }
}
