const carOil = require('../../assets/icons/car-oil.png');

export class PlansList {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
    <section class="plans__section-list">
    <ul class="plans__list grid gap-y-3 mb-4">
      <li class="plans__item relative bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__bar absolute bottom-12 right-0 bg-blue text-white text-xs px-3 py-1 rounded-md">Через 10 дней</div>
        <div class="plans__item-and-icon flex items-center mr-2">
          <img src="${carOil}" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
          <div class="plans__text">
            <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
            <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
            </span>
          </div>
        </div>
        <div class="plans__date text-xs font-bold text-end">25 дек. 2022г.</div>
      </li>
      <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex items-center mr-2">
          <img src="${carOil}" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
          <div class="plans__text">
            <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
            <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
            </span>
          </div>
        </div>
        <div class="plans__date text-xs font-bold text-end">25 дек. 2022г.</div>
      </li>
      <li class="plans__item bg-slate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex items-center mr-2">
          <img src="${carOil}" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
          <div class="plans__text">
            <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
            <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
            </span>
          </div>
        </div>
        <div class="plans__date text-xs font-bold text-end">25 дек. 2022г.</div>
      </li>
    </ul>
  </section>
    `;
    return fragment.content;
  }
}
