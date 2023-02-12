import { EventsHeader } from './EventsHeader';
import { EventsSearch } from './EventsSearch';
import { EventsMenu } from './EventsMenu';
import { EventsList } from './EventsList';

export class EventsPage {
  parent: HTMLElement;
  private header = new EventsHeader().element;
  private search = new EventsSearch().element;
  private menu = new EventsMenu().element;
  private list = new EventsList().element;
  addEventCircule!: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
  }

  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const fragment = document.createElement('section');
    fragment.classList.add('events');
    fragment.innerHTML = `
    ${this.header}
    ${this.search}
    ${this.menu}
    ${this.list}
    `;
    this.parent.append(fragment);
  }
}
