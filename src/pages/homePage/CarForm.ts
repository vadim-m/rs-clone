import { ICar } from '../../types';
import data from '../../data/cars.json';

export class CarForm {
  public element: DocumentFragment;
  private carAction: string;
  private hiddenButton: string;
  private car: ICar | null;

  constructor(hasCar: boolean, car: ICar | null) {
    this.carAction = hasCar ? 'Изменить' : 'Добавить';
    this.hiddenButton = hasCar ? '' : 'hidden';
    this.car = car;
    this.element = this.createElement();
  }

  createBrands() {
    const ul = document.createElement('datalist');
    data.forEach((el) => {
      const li = document.createElement('option');
      li.value = el['name'];
      ul.append(li);
    });
    return ul.innerHTML;
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <div class="$flex flex-col justify-center overflow-auto">

        <h1 class="text-2xl font-bold text-center mb-2">${this.carAction} машину</h1>
        <form class="flex flex-col pt-6" id="car-form" data-car-id=${this.car?._id ?? ''}>

        <div class="md:flex mb-6">
          <div class="add-car-form__required md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Марка
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" name="brand" type="text" placeholder="Chevrolet" list="brands" id="add-brand" required autofocus 
            value=${this.car?.brand ?? ''}>
            <datalist id="brands">
              ${this.createBrands()}
            </datalist>
            <p class="text-red-500 text-xs italic hidden">Пожалуйста, заполните поле</p>
          </div>

          <div class="add-car-form__required md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Модель
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="model" type="text" placeholder="Aveo" list="models" id="add-model" required 
            value=${this.car?.model ?? ''}>
            <datalist id="models">
            </datalist>
            <p class="text-red-500 text-xs italic hidden">Пожалуйста, заполните поле</p>
          </div>
        </div>

        <div class="md:flex mb-6">
          <div class="add-car-form__required md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Год выпуска
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" name="year" minlength="4" maxlength="4" placeholder="2020" required 
            value=${this.car?.year ?? ''}>
            <p class="text-red-500 text-xs italic hidden">Пожалуйста, заполните поле</p>
          </div>

          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Вид топлива
            </label>
            <div class="relative">
              <select class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" name="fuel">
                <option>Бензин</option>
                <option>Дизель</option>
                <option>Газ</option>
                <option>Электричество</option>
                <option>Гибрид</option>
              </select>
              <div class="pointer-events-none absolute right-0 top-4 pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Пробег (текущий), км.
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="number" name="mileage" placeholder="5000" required 
            value=${this.car?.mileage ?? ''}>
          </div>

          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Объем бака, л.
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="sizeTank" placeholder="50" required 
            value=${this.car?.sizeTank ?? ''}>
          </div>
        </div>

        <h3 class="text-xl font-bold text-slate-400 mb-4 px-3">Двигатель</h3>
          <div class="md:flex">

            <div class="md:w-1/2 px-3 mb-6">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                Объем, л.
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="sizeEngine" placeholder="1,4" 
              value=${this.car?.engineDisplacement ?? ''}>
            </div>

            <div class="md:w-1/2 px-3 mb-6">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                Мощность, л.с.
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="powerEngine" placeholder="150" 
              value=${this.car?.enginePower ?? ''}>
            </div>
          </div>

          <div id="car-alert" class="invisible py-4 px-6 mb-6 mx-auto rounded-lg text-base w-3/4" >
            Alert
          </div>

          <div class="flex flex-wrap justify-center" >
            <button id="car-btn" class="text-md bg-myblue text-white mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait" type="submit">
              ${this.carAction} машину
            </button>
            <button id="stop-change-car" class="text-md bg-myblue text-white mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-blue-700 enabled:focus:bg-blue-700 disabled:opacity-25 disabled:cursor-wait ${
              this.hiddenButton
            }" type="button">
              Отмена
            </button>
            <button id="delete-car" class="text-md bg-red-700 text-white mx-6 mb-4 px-9 py-2 rounded-md enabled:hover:bg-red-600 enabled:focus:bg-red-600 disabled:opacity-25 disabled:cursor-wait ${
              this.hiddenButton
            }" type="button">
              Удалить машину
            </button>
          </div>

        </form>
      </div>
    `;

    return fragment.content;
  }
}
