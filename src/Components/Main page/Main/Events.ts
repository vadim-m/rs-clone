const funnel = require('../../../assets/icons/funnel.png');
const tires = require('../../../assets/icons/tires.png');

export class Events {
  render() {
    return `       
    <h2 class="events__title font-medium text-sm mb-2">Последние события</h2>
    <ul class="events__list grid gap-y-3">
      <li class="events__item grid grid-cols-layout justify-between items-center p-2 drop-shadow-md bg-white">
        <div class="events__item-and-icon flex items-center mr-2">
          <img src="${funnel}" class="plans__image w-7 h-7 mr-4" alt="funnell-icon">
          <div class="events__text flex flex-col">
            <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена топливного фильтра</h3>
            <span class="events__addition text-xxs leading-3 inline-block">Вместе с фильтром. Автосервис "Перекресток"
            </span>
          </div>
        </div>
        <div class="events__date-and-price">
          <div class="events__price text-xs font-bold mb-1">3 900 ₽</div>
          <div class="events__date text-xxs leading-3">20 февр. 2023 г.</div>
        </div>
      </li>

      <li class="events__item grid grid-cols-layout justify-between items-center p-2 drop-shadow-md bg-white">
        <div class="events__item-and-icon flex items-center mr-2">
          <img src="${tires}" class="plans__image w-7 h-7 mr-4" alt="tires-icon">
          <div class="events__text flex flex-col">
            <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена резины</h3>
            <span class="events__addition text-xxs leading-3 inline-block">СТО на ул.Приморской"
            </span>
          </div>
        </div>
        <div class="events__date-and-price">
          <div class="events__price text-xs font-bold mb-1">1 300 ₽</div>
          <div class="events__date text-xxs leading-3">1 марта 2023 г.</div>
        </div>
      </li>

    </ul>
    `;
  }
}
