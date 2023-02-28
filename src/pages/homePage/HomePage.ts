import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';
import { ICar, IParamsOneEvents, ISettingsMyCar } from '../../types';
import data from '../../data/cars.json';
import { CarForm } from './CarForm';
import { createCar, updateCar, deleteCar, getSettingsFromAPI } from '../../helpers/api';
import { prepareDataObj } from '../../helpers/utils';
import { getAppSettingsFromLS, setCarDataFromDB } from '../../helpers/localStorage';
import { setUserSettings } from '../../helpers/authentication';
import { currentLiArr, searchLi } from '../../utilits/searchElement';
import { createArrPlans } from '../plansPage/arrayReminders';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
import { Popup } from '../../components/popup';
import { buttonLang } from '../../lang/buttonLang';
import { eventLang } from '../../lang/addEventLang';
import { getUnits } from '../../components/units';
import { getCurrentLanguage, mySetting } from '../../utilits/getCurrentSettings';
import { createArrEvents, showEvents } from '../eventsPage/arrayEvents';
import { SideMenu } from './SideMenu';

export class HomePage {
  private info: DocumentFragment | null;
  private plans: DocumentFragment | null;
  private events: DocumentFragment | null;
  private carForm: DocumentFragment | null;
  private sideMenu: DocumentFragment | null;
  private hasCar: boolean;
  private hiddenFormSectionClass: string | null;
  page = '/';
  parent: HTMLElement;
  addEventCircule!: HTMLElement;
  navigateTo: (path: string) => void;
  listContainerPlans: HTMLUListElement | null;
  listContainerEvents: HTMLUListElement | null;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.info = null;
    this.plans = null;
    this.events = null;
    this.carForm = null;
    this.hiddenFormSectionClass = null;
    this.sideMenu = null;
    this.navigateTo = goTo;
    this.hasCar = this.checkAvailabilityCar();
    this.createElement();
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.classList.remove('hidden__menu');
    this.listContainerPlans = document.querySelector('.plans__list');
    this.listContainerEvents = document.querySelector('.events__list');
    this.addDefaultRemind();
    this.handlerReminder();
    this.handlerEvents();
    this.addEvents();
  }

  checkAvailabilityCar() {
    return getAppSettingsFromLS()?.hasCar ?? false;
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
    this.sideMenu = new SideMenu().element;
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

    this.parent.append(this.sideMenu, formSection, infoSection, plansSection, eventsSection);
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
      document.querySelector('.spinner')?.classList.remove('hidden');

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
        // спрятали спиннер
        document.querySelector('.spinner')?.classList.add('hidden');
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
        document.querySelector('.spinner')?.classList.add('hidden');
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      carDeleteBtn.disabled = true;
      submitBtn.disabled = true;
      closeCarSettingsBtn.disabled = true;
      document.querySelector('.spinner')?.classList.remove('hidden');

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
        res = await updateCar(preparedRequestData, carId);
      } else {
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
        // получаем и устанавливаем свежие данные в LS
        await setCarDataFromDB();
        // получаем и устанавливаем новые настройки
        const updatedSettings: ISettingsMyCar = await (await getSettingsFromAPI()).json();
        setUserSettings(updatedSettings);
        // спрятали спиннер
        document.querySelector('.spinner')?.classList.add('hidden');
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
        document.querySelector('.spinner')?.classList.add('hidden');
      }
    });
  }
  // методы Планов
  addDefaultRemind() {
    (this.listContainerPlans as HTMLUListElement)?.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLUListElement);
      const curID = currentLiArr[0].id;
      if ((event.target as HTMLElement).matches('.reminder-add__btn')) {
        window.location.href = `/reminder?id=${curID}&pageCall=${this.page}`;
      }
    });
  }

  handlerReminder() {
    (this.listContainerPlans as HTMLUListElement)?.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLUListElement);
      const curID = currentLiArr[0].id;

      const curReminderObj = createArrPlans(showPlans.myPlans).filter((e) => e.id === curID)[0];
      if (currentLiArr[0].getAttribute('data-default') === 'false') {
        new Popup(
          `<p class="mb-20 text-center">${curReminderObj.textName}</p>`,
          buttonLang().edit,
          'confirm__btn--edit',
          'confirm__btn--edit',
          buttonLang().completed,
          'confirm__btn--completed',
          'confirm__btn--completed'
        );
        const popup = document.querySelector('.popup__container') as HTMLElement;
        popup.addEventListener('click', (event) => {
          if ((event.target as HTMLElement).matches('.confirm__btn--completed')) {
            if (currentLiArr[0].getAttribute('data-typeService') === eventLang().other) {
              window.location.href = `/other?id=${curReminderObj.id}&pageCall=${this.page}`;
            } else {
              window.location.href = `/service?id=${curReminderObj.id}&pageCall=${this.page}`;
            }
          }
          if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
            window.location.href = `/reminder?id=${curReminderObj.id}&pageCall=${this.page}&edit=true`;
          }
        });
      }
    });
  }
  // методы событий

  handlerEvents() {
    (this.listContainerEvents as HTMLUListElement)?.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLUListElement);
      const curID = currentLiArr[0].id;
      const curEventsObj = createArrEvents(showEvents.all).filter((e) => e.id === curID)[0];

      const popup = new Popup(
        this.popupContent(curEventsObj),
        buttonLang().edit,
        'confirm__btn--edit',
        'confirm__btn--edit',
        buttonLang().ok,
        'confirm__btn--ok',
        'confirm__btn--ok'
      );

      const popupHandler = document.querySelector('.popup__container') as HTMLElement;
      popupHandler.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          if (currentLiArr[0].getAttribute('data-event') === 'other') {
            window.location.href = `/other?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
          }
          if (currentLiArr[0].getAttribute('data-event') === 'service') {
            window.location.href = `/service?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
          }
          if (currentLiArr[0].getAttribute('data-event') === 'refuel') {
            window.location.href = `/refuel?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
          }
        }
        if ((event.target as HTMLElement).matches('.confirm__btn--ok')) {
          popup.removePopup();
        }
      });
    });
  }

  popupContent(curEventsObj: IParamsOneEvents) {
    return `
              <h1 class="data text-sm font-bold mb-4 leading-4 text-center">${new Date(
                curEventsObj.date as string
              ).toLocaleString(getCurrentLanguage() === 'English' ? 'en-US' : 'ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
              })}</h1>
            <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().name}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.titleName}</p>
            </div>

            ${
              curEventsObj.amountFuel
                ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().quant}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.amountFuel}${getUnits().volume.slice(2)}</p>
            </div> `
                : ''
            }
            <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().mileage}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.mileage}${getUnits().distance.slice(2)}</p>
            </div>
            
            ${
              curEventsObj.place
                ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().place}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.place}</p>
            </div> `
                : ''
            }  
                    ${
                      curEventsObj.notes
                        ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().comments}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.notes}</p>
            </div> `
                        : ''
                    }  
          <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().amount}:</p>            
              <p class="name bg-myslate pl-2 mb-10">${curEventsObj.totalPrice}${mySetting().currency}</p>
            </div>  `;
  }

  addEvents() {
    const burger = document.querySelector('#nav-burger');
    const navBar = document.querySelector('#nav-bar');
    const closeButton = document.querySelector('.navbar__close');
    const navBackdrop = document.querySelector('.navbar__backdrop') as HTMLDivElement;
    burger?.addEventListener('click', () => {
      navBar?.classList.remove('hidden');
      navBackdrop?.classList.remove('hidden');
    });
    closeButton?.addEventListener('click', () => {
      navBar?.classList.add('hidden');
      navBackdrop?.classList.add('hidden');
    });
    navBackdrop?.addEventListener('click', () => {
      navBar?.classList.add('hidden');
      navBackdrop?.classList.add('hidden');
    });
  }
}
