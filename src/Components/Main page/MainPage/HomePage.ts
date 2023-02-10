import { Nav } from '../../Navigation/Nav';
import { Main } from './Main';

export class HomePage {
  private nav = new Nav().element;
  private main = new Main().element;
  public element: HTMLElement;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('mx-auto');

    container.append(this.nav, this.main);

    return container;
  }
}
