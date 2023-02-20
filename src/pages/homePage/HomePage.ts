import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';

export class HomePage {
  private info = new Info().element;
  private plans = new Plans().element;
  private events = new Events().element;
  parent: HTMLElement;
  addEventCircule!: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
  }

  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';

    const info = document.createElement('section');
    info.classList.add('info');
    info.append(this.info);

    const plans = document.createElement('section');
    plans.classList.add('plans');
    plans.append(this.plans);

    const events = document.createElement('section');
    events.classList.add('events');
    events.append(this.events);

    this.parent.append(info, plans, events);
  }
}
