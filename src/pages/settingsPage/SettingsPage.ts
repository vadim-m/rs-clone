import { updateSettings } from '../../helpers/api';
import { getAppSettingsFromLS } from '../../helpers/localStorage';
import { setUserSettings } from '../../helpers/authentication';
import { ISettingsMyCar } from '../../types';

export class SettingsPage {
  parent: HTMLElement;
  navigateTo: (path: string) => void;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.createElement();
    this.addEvents();
  }

  addEvents() {
    const form = this.parent.querySelector('#settings-form') as HTMLFormElement;
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const button = form.querySelector('button') as HTMLButtonElement;
      button.disabled = true;

      const language = form.language as HTMLInputElement;
      const currency = form.currency as HTMLInputElement;
      const darkTheme = form.mode as HTMLInputElement;
      const orientation = form.orientation as HTMLInputElement;
      const rememberPriceFuel = form.price as HTMLInputElement;
      const predictMileage = form.mileage as HTMLInputElement;

      const settingsData: ISettingsMyCar = {
        language: language.value,
        currency: currency.value,
        darkTheme: darkTheme.checked,
        orientation: orientation.checked,
        rememberPriceFuel: rememberPriceFuel.checked,
        predictMileage: predictMileage.checked,
      };

      const res = await updateSettings(settingsData);
      const status = res.status;
      const data = await res.json();

      if (status === 200) {
        setUserSettings(data);
        setTimeout(() => {
          this.navigateTo('/settings');
        }, 200);
      }
    });
  }

  createElement() {
    const settings = getAppSettingsFromLS();

    const fragment = document.createElement('section');
    fragment.classList.add('settings');
    fragment.innerHTML = `
    <div class="settings__container flex flex-col justify-center overflow-auto">

    <form class="settings__form flex flex-col pt-6" id="settings-form">

    <div class="md:flex mb-6">
      <div class="settings-form__required md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Язык
        </label>
        <div class="relative">
        <select class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 dark:bg-slate-400" name="language">
          <option>English</option>
          <option>Русский</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-4 pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      </div>

      <div class="settings-form__required md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Валюта
        </label>
        <div class="relative">
          <select class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 dark:bg-slate-400" name="currency"">
            <option>₽</option>
            <option>BYN</option>
            <option>$</option>
          </select>
          <div class="pointer-events-none absolute right-0 top-4 pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="h-4 w-4 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="settings__interfaces flex flex-col md:flex">
      <div class="px-3 mb-6">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Ночной режим
        </label>
        <div class="flex justify-between items-center">
          <h2 class="text-xs">Включить ночной режим во всех разделах приложения</h2>
          <div class="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="mode" id="toggle-night" class="toggle__checkbox_night absolute block shadow-md w-9 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
            ${settings?.darkTheme ? 'checked' : ''}
            />
            <label for="toggle-night" class="toggle__label_night block overflow-hidden shadow-md h-8 rounded-full bg-slate-300 cursor-pointer"></label>
          </div>
        </div>
      </div>

      <div class="px-3 mb-6">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
          Ориентация интерфейса
        </label>
        <div class="flex justify-between items-center">
          <h2 class="text-xs">Включить режим для левшей</h2>
          <div class="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="orientation" id="toggle-left" class="toggle__checkbox_left absolute block shadow-md w-9 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
            ${settings?.orientation ? 'checked' : ''}
            />
            <label for="toggle-left" class="toggle__label_left block overflow-hidden shadow-md h-8 rounded-full bg-slate-300 cursor-pointer"></label>
          </div>
        </div>
      </div>
    </div>

      <div class="px-3 mb-6">
        <div class="flex justify-between items-center">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold">Помнить цену топлива</label>
          <div class="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="price" id="toggle-price" class="toggle__checkbox_price absolute block shadow-md w-9 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
            ${settings?.rememberPriceFuel ? 'checked' : ''}
            />
            <label for="toggle-price" class="toggle__label_price block overflow-hidden shadow-md h-8 rounded-full bg-slate-300 cursor-pointer"></label>
          </div>
        </div>
      </div>

      <div class="px-3">
        <div class="flex justify-between items-center">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold">Предугадывать пробег</label>
          <div class="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="mileage" id="toggle-mileage" class="toggle__checkbox_mileage absolute block shadow-md w-9 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
            ${settings?.predictMileage ? 'checked' : ''}
            />
            <label for="toggle-mileage" class="toggle__label_mileage block overflow-hidden shadow-md h-8 rounded-full bg-slate-300 cursor-pointer"></label>
          </div>
        </div>
      </div>

      <div class="flex justify-center" id="settings-button">
        <button class="text-md bg-myblue text-white mt-4 px-9 py-2 w-72 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait" type="submit">
          Сохранить изменения
        </button>
      </div>
      

    </form>
  </div>
    `;
    this.parent.append(fragment);
  }
}
