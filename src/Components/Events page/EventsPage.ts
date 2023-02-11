import { Header } from '../Header';
import { Nav } from '../Navigation/Nav';
import { EventsHeader } from './EventsHeader';
import { EventsSearch } from './EventsSearch';

export class EventsPage {
  private header = new Header().element;
  private eventsHeader = new EventsHeader().element;
  private EventsSearch = new EventsSearch().element;
  private nav = new Nav().element;
  public element: HTMLElement;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('mx-auto');

    const header = document.createElement('header');
    header.classList.add('header');
    header.append(this.nav, this.header);

    const section = document.createElement('section');
    header.classList.add('events');
    section.append(this.eventsHeader, this.EventsSearch);

    container.append(header, section);
    return container;
  }
}
