import { Header } from '../Header';
import { PlansList } from './PlansList';
import { PlansSearch } from './PlansSearch';
import { Nav } from '../Navigation/Nav';

export class PlansPage {
  private header = new Header().element;
  private search = new PlansSearch().element;
  private list = new PlansList().element;
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

    const plans = document.createElement('section');
    plans.classList.add('plans');
    plans.append(this.search, this.list);

    container.append(header, plans);
    return container;
  }
}
