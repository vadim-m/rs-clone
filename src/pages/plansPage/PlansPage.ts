import { PlansList } from './PlansList';
import { PlansSearch } from './PlansSearch';

export class PlansPage {
  private search = new PlansSearch().element;
  private list = new PlansList().element;
  parent: HTMLElement;
  addEventCircule!: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
  }

  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const plans = document.createElement('section');
    plans.classList.add('plans');
    plans.append(this.search, this.list);

    this.parent.append(plans);
  }
}
