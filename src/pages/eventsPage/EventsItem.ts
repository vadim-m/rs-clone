const funnel = require('../../assets/icons/funnel.png');

export class EventsItem {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
      <li class="events__item grid grid-cols-layout justify-between items-center p-2 border-b border-slateBorders">
        <div class="events__item-and-icon flex items-center mr-2">
          <img src="${funnel}" class="plans__image w-7 h-7 mr-4" alt="funnell-icon">
          <div class="events__text flex flex-col">
            <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена топливного фильтра</h3>
            <span class="events__addition text-xxs leading-3 inline-block">Вместе с фильтром. Автосервис "Перекресток"
            </span>
          </div>
        </div>
        <div class="events__date-and-price">
          <div class="events__price text-xs font-bold mb-1 text-end">3 900 ₽</div>
          <div class="events__date text-xxs leading-3 text-end">20 февр. 2023г.</div>
        </div>
      </li>
    `;
  }
}
