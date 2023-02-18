import { ICar } from '../../types';

export class CarForm {
  public element: DocumentFragment;
  private carAction: string;
  private car: ICar | null;

  constructor(hasCar: boolean, car: ICar | null) {
    this.carAction = hasCar ? 'Изменить' : 'Добавить';
    this.car = car;
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <div class="$flex flex-col justify-center overflow-auto">

        <h1 class="text-2xl font-bold text-center mb-2">${this.carAction} машину</h1>
        <form class="px-8 pt-6 pb-8 flex flex-col" id="car-form" data-car-id=${this.car?._id ?? ''}>

        <div class="-mx-3 md:flex mb-6">
          <div class="add-car-form__required md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Марка
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" name="brand" type="text" placeholder="Chevrolet" required autofocus 
            value=${this.car?.brand ?? ''}>
            <p class="text-red-500 text-xs italic hidden">Пожалуйста, заполните поле</p>
          </div>

          <div class="add-car-form__required md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Модель
            </label>
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" name="model" type="text" placeholder="Aveo" required 
            value=${this.car?.model ?? ''}>
            <p class="text-red-500 text-xs italic hidden">Пожалуйста, заполните поле</p>
          </div>
        </div>

        <div class="-mx-3 md:flex mb-6">
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

        <div class="-mx-3 md:flex mb-6">
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

        <h3 class="text-xl font-bold text-slate-400 mb-4">Двигатель</h3>
          <div class="-mx-3 md:flex mb-6">

            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                Тип двигателя
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" name="engine">
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

            <div class="md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                Объем, л.
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="sizeEngine" placeholder="1,4" 
              value=${this.car?.engineDisplacement ?? ''}>
            </div>

            <div class="md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                Мощность, л.с.
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="powerEngine" placeholder="150" 
              value=${this.car?.enginePower ?? ''}>
            </div>
          </div>

          <div class="flex justify-center">
            <button id="car-btn" class="text-md bg-myblue text-white px-7 py-1 rounded-md" type="submit">
              ${this.carAction} машину
            </button>
            <button id="stop-change-car" class="text-md bg-myblue text-white ml-6 px-7 py-1 rounded-md" type="button">
              ${this.carAction} Отмена
            </button>
          </div>

        </form>
      </div>
    `;

    return fragment.content;
  }
}
