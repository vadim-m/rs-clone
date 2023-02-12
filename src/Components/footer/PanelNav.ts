const home = require('../../assets/icons/home.png');
const event = require('../../assets/icons/event.png');
const calendar = require('../../assets/icons/calendar.png');
const pieChart = require('../../assets/icons/pie-chart.png');
import { TabsButton } from '../footer/TabsButton';

export class PanelNav {
  private tabsButton = new TabsButton().element;
  // public element: HTMLDivElement;

  constructor() {
    this.render();
  }

  render() {
    const mainContainer = document.querySelector('.main') as HTMLElement;
    mainContainer.after(this.createElement());
  }

  createElement() {
    const element = document.createElement('footer');
    element.classList.add('footer');
    element.classList.add('fixed');
    element.classList.add('bottom-0');
    element.classList.add('left-0');
    element.classList.add('right-0');
    element.classList.add('z-40');
    element.classList.add('bg-white');

    element.innerHTML = `
      <nav class="nav relative shadow-top px-5 py-3">
        <ul class="nav__list flex flex-row justify-between text-xs">
          <li class="nav__item">
            <a href="/" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${home}" alt="home-icon">
              <span class="nav__name">Главная</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/events" class="nav__link flex flex-col items-center">
              <img class="nav__icon w-6 h-6" src="${event}" alt="event-icon">
              <span class="nav__name">События</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/plans" class="nav__link flex flex-col items-center">
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
      </nav>
    `;
    element.append(this.tabsButton);
    return element;
  }
}
