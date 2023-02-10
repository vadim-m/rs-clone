import { Header } from '../Header';
import { Nav } from '../Navigation/Nav';

export class EventsPage {
  private header = new Header().element;
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

    container.append(header);
    return container;
  }
}
