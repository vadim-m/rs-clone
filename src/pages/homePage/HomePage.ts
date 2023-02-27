import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';
import { ICar, ISettingsMyCar } from '../../types';
import data from '../../data/cars.json';
import { CarForm } from './CarForm';
import { createCar, updateCar, deleteCar, getSettingsFromAPI } from '../../helpers/api';
import { prepareDataObj } from '../../helpers/utils';
import { setCarDataFromDB } from '../../helpers/localStorage';
import { setUserSettings } from '../../helpers/authentication';

export class HomePage {
  private info: DocumentFragment | null;
  private plans: DocumentFragment | null;
  private events: DocumentFragment | null;
  private carForm: DocumentFragment | null;
  private hasCar: boolean;
  private hiddenFormSectionClass: string | null;
  parent: HTMLElement;
  addEventCircule!: HTMLElement;
  navigateTo: (path: string) => void;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.info = null;
    this.plans = null;
    this.events = null;
    this.carForm = null;
    this.hiddenFormSectionClass = null;
    this.navigateTo = goTo;
    this.hasCar = this.checkAvailabilityCar();
    this.createElement();
  }

  checkAvailabilityCar() {
    return true;
  }

  createModels() {
    const datalist = document.querySelector('#models') as HTMLElement;
    datalist.innerHTML = '';
    const brandName = document.querySelector('#add-brand') as HTMLInputElement;
    const brand = brandName.value;
    const currentBrand = data.filter((el) => el.name === brand);
    for (let i = 0; i <= data.length; i++) {
      if (currentBrand[i]) {
        currentBrand[i].models.forEach((el) => {
          const li = document.createElement('option');
          li.value = el['name'];
          datalist.append(li);
        });
      }
    }
  }

  deleteModels() {
    const datalist = document.querySelector('#add-model') as HTMLInputElement;
    datalist.value = '';
  }

  async createElement() {
    this.info = new Info().element;
    this.plans = new Plans().element;
    this.events = new Events().element;
    this.carForm = new CarForm(this.hasCar).element;
    this.hiddenFormSectionClass = this.hasCar ? 'hidden' : '';

    if (!this.hasCar) {
      const formSection = document.createElement('section');
      formSection.className = `car-form`;
      formSection.append(this.carForm);

      this.parent.append(formSection);
      this.addListeners();
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
    this.addListeners();
  }

  addListeners() {
    const form = this.parent.querySelector('#car-form') as HTMLFormElement;
    const submitBtn = this.parent.querySelector('#car-btn') as HTMLFormElement;
    const carId = form.dataset.carId || '';
    const carSettingsBtn = this.parent.querySelector('#change-car') as HTMLFormElement;
    const closeCarSettingsBtn = this.parent.querySelector('#stop-change-car') as HTMLFormElement;
    const carDeleteBtn = this.parent.querySelector('#delete-car') as HTMLFormElement;
    const alertEl = document.querySelector('#car-alert') as HTMLDivElement;

    const brand = this.parent.querySelector('#add-brand') as HTMLInputElement;
    brand.addEventListener('input', () => {
      if (+brand.value < 1) this.deleteModels();
    });

    const model = this.parent.querySelector('#add-model') as HTMLInputElement;
    model.addEventListener('focus', () => {
      this.createModels();
    });

    carSettingsBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.parent.querySelector('.car-form')?.classList.toggle('hidden');
      this.parent.querySelector('.info')?.classList.toggle('hidden');
      this.parent.querySelector('.plans')?.classList.toggle('hidden');
      this.parent.querySelector('.events')?.classList.toggle('hidden');
    });

    closeCarSettingsBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.parent.querySelector('.car-form')?.classList.toggle('hidden');
      this.parent.querySelector('.info')?.classList.toggle('hidden');
      this.parent.querySelector('.plans')?.classList.toggle('hidden');
      this.parent.querySelector('.events')?.classList.toggle('hidden');
    });

    carDeleteBtn?.addEventListener('click', async (e) => {
      e.preventDefault();

      carDeleteBtn.disabled = true;
      submitBtn.disabled = true;
      carSettingsBtn.disabled = true;
      closeCarSettingsBtn.disabled = true;

      const res = await deleteCar(carId);
      const status = res.status;
      const data = await res.json();

      if (status === 200) {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-red-100');
        alertEl.classList.add('bg-green-100');
        alertEl.classList.remove('text-red-700');
        alertEl.textContent = `Status: ${status}. Successfully.`;
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // получаем и устанавливаем новые настройки
        const updatedSettings: ISettingsMyCar = await (await getSettingsFromAPI()).json();
        setUserSettings(updatedSettings);
        // переадресация на главную
        setTimeout(() => {
          this.navigateTo('/');
        }, 100);
      } else {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-green-100');
        alertEl.classList.add('bg-red-100');
        alertEl.classList.add('text-red-700');
        alertEl.textContent = `Status: ${status}. Error: ${data.message}`;
        submitBtn.disabled = false;
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      carDeleteBtn.disabled = true;
      submitBtn.disabled = true;
      closeCarSettingsBtn.disabled = true;

      const brand = form.brand as HTMLInputElement;
      const model = form.model as HTMLInputElement;
      const year = form.year as HTMLInputElement;
      const fuel = form.fuel as HTMLInputElement;
      const mileage = form.mileage as HTMLInputElement;
      const sizeTank = form.sizeTank as HTMLInputElement;
      const sizeEngine = form.sizeEngine as HTMLInputElement;
      const powerEngine = form.powerEngine as HTMLInputElement;

      const carData: ICar = {
        brand: brand.value,
        model: model.value,
        year: year.value,
        fuel: fuel.value,
        mileage: mileage.value,
        sizeTank: sizeTank.value,
        engineDisplacement: sizeEngine.value,
        enginePower: powerEngine.value,
      };

      const preparedRequestData = prepareDataObj(carData);
      let res: Response;

      if (this.hasCar) {
        console.log('Mашина есть, обновляем');
        res = await updateCar(preparedRequestData, carId);
      } else {
        console.log('Mашины нет, создаем');
        res = await createCar(preparedRequestData);
      }

      const status = res.status;
      const data = await res.json();

      if (status === 200 || status === 201) {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-red-100');
        alertEl.classList.add('bg-green-100');
        alertEl.classList.remove('text-red-700');
        alertEl.textContent = `Status: ${status}. Successfully.`;
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // получаем и устанавливаем новые настройки
        const updatedSettings: ISettingsMyCar = await (await getSettingsFromAPI()).json();
        setUserSettings(updatedSettings);
        // переадресация на главную
        setTimeout(() => {
          this.navigateTo('/');
        }, 100);
      } else {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-green-100');
        alertEl.classList.add('bg-red-100');
        alertEl.classList.add('text-red-700');
        alertEl.textContent = `Status: ${status}. Error: ${data.message}`;
        submitBtn.disabled = false;
      }
    });
  }
}
