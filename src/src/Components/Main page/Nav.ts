const home = require('../../assets/icons/home.png');
const event = require('../../assets/icons/event.png');
const calendar = require('../../assets/icons/calendar.png');
const pieChart = require('../../assets/icons/pie-chart.png');
const plus = require('../../assets/icons/plus.svg');

export class Nav {
  render() {
    return `
    <nav class="nav relative shadow-top px-5 py-3">
        <ul class="nav__list flex flex-row justify-between text-xs">
          <li class="nav__item">
            <a href="#" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${home}" alt="home-icon">
              <span class="nav__name">Главная</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${event}" alt="event-icon">
              <span class="nav__name">События</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${calendar}" alt="calendar-icon">
              <span class="nav__name">Планы</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${pieChart}" alt="pie-icon">
              <span class="nav__name">Статистика</span>
            </a>
          </li>
        </ul>
      <button class="nav__button absolute bottom-14 right-0 w-11 h-11 p-2 rounded-full bg-blue">
      <img src="${plus}" alt="plus">
    </button>
    </nav>
    `;
  }
}
