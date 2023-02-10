const carOil = require('../../../assets/icons/car-oil.png');
const carRepair = require('../../../assets/icons/car-repair.png');
const gear = require('../../../assets/icons/gear.png');

export class Plans {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `       
    <h2 class="plans__title font-medium text-sm mb-2">Ближайшие планы</h2>
    <ul class="plans__list grid gap-y-3 mb-4">
      <li class="plans__item relative bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 shadow-md">
        <div class="plans__bar absolute bottom-14 right-0 bg-blue text-white text-xs px-3 py-1 rounded-md">Через 10 дней</div>
        <div class="plans__item-and-icon flex items-center mr-2">
          <img src="${carOil}" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
          <div class="plans__text">
            <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
            <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
            </span>
          </div>
        </div>
        <div class="plans__date text-xs font-bold text-center pr-1">25 дек. 2022 г.</div>
      </li>
      <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex">
          <img src="${carRepair}" class="plans__image w-7 h-7 mr-4" alt="repair-icon">
          <h3 class="plans__title text-sm font-bold mb-1 leading-3">Диагностика подвески</h3>
        </div>
        <button class="plans__button button text-xs bg-blue text-white px-3 py-1 rounded-md">Добавить</button>
      </li>
      <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex">
          <img src="${gear}" class="plans__image w-7 h-7 mr-4" alt="gear-icon">
          <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена фильтров</h3>
        </div>
        <button class="plans__button button text-xs bg-blue text-white px-3 py-1 rounded-md">Добавить</button>
      </li>
    </ul>
    `;

    return fragment.content;
  }
}
