import { EventsHeader } from './EventsHeader';
import { EventsMenu } from './EventsMenu';
import { EventsList } from './EventsList';
import { createArrEvents, showEvents } from './arrayEvents';
import { eventLang } from '../../lang/addEventLang';
import { currentLiArr, searchLi } from '../../utilits/searchElement';
import { buttonLang } from '../../lang/buttonLang';
import { Popup } from '../../components/popup';

export class EventsPage {
  parent: HTMLElement;
  page = 'events';
  private list = new EventsList(showEvents.all).element;
  private header = new EventsHeader().element;
  private menu = new EventsMenu().element;
  addEventCircule!: HTMLElement;
  selectDisplayDOM: HTMLSelectElement;
  listContainer: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.selectDisplayDOM = document.querySelector('.events__menus_select') as HTMLSelectElement;
    this.listContainer = document.querySelector('.events__list') as HTMLUListElement;
    this.chooseDisplay();
    this.handlerEvents();
  }

  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const fragment = document.createElement('section');
    this.listContainer = document.createElement('section');
    this.listContainer.classList.add('plans__section-list');
    this.listContainer.innerHTML = `${this.list}`;
    fragment.classList.add('events');
    fragment.innerHTML = `
    ${this.header}
    ${this.menu}
    `;
    this.parent.append(fragment, this.listContainer);
  }

  chooseDisplay() {
    this.selectDisplayDOM.addEventListener('change', () => {
      this.rerenderList();
    });
  }

  rerenderList() {
    const display =
      this.selectDisplayDOM.value === `${eventLang().other}`
        ? showEvents.others
        : this.selectDisplayDOM.value === `${eventLang().refuels}`
        ? showEvents.refuel
        : this.selectDisplayDOM.value === `${eventLang().service}`
        ? showEvents.service
        : showEvents.all;
    (this.listContainer as HTMLElement).innerHTML = '';
    (this.listContainer as HTMLElement).innerHTML = new EventsList(display).element;
  }

  handlerEvents() {
    (this.listContainer as HTMLUListElement).addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, this.listContainer);
      const curID = currentLiArr[0].id;
      console.log(currentLiArr[0]);
      const curEventsObj = createArrEvents(showEvents.all).filter((e) => e.id === curID)[0];

      new Popup(
        `<p class="mb-20 text-center">${curEventsObj.titleName}</p>
          <p class="mb-20 text-center">${curEventsObj.date}</p>
          <p class="mb-20 text-center">${curEventsObj.mileage}</p>
          <p class="mb-20 text-center">${curEventsObj.totalPrice}</p>`,
        buttonLang().edit,
        'confirm__btn--edit',
        'confirm__btn--edit',
        buttonLang().ok,
        'confirm__btn--ok',
        'confirm__btn--ok'
      );

      // console.log(eventLang().other);
      const popup = document.querySelector('.popup__container') as HTMLElement;
      popup.addEventListener('click', (event) => {
        console.log(currentLiArr[0].getAttribute('data-event'));
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          if (currentLiArr[0].getAttribute('data-event') === 'other') {
            window.location.href = `/other?id=${curEventsObj.id}&pageCall=${this.page}`;
          }
          if (currentLiArr[0].getAttribute('data-event') === 'service') {
            window.location.href = `/service?id=${curEventsObj.id}&pageCall=${this.page}`;
          }
          if (currentLiArr[0].getAttribute('data-event') === 'refuel') {
            window.location.href = `/refuel?id=${curEventsObj.id}&pageCall=${this.page}`;
          }
        }
        if ((event.target as HTMLElement).matches('.confirm__btn--ok')) {
          popup.remove();
        }
      });
    });
  }
}
