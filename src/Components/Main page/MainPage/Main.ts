import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';

export class Main {
  private info = new Info().element;
  private plans = new Plans().element;
  private events = new Events().element;
  public element: HTMLElement;

  constructor() {
    this.element = this.createElement();
    this.element.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }

  createElement() {
    const main = document.createElement('main');
    main.classList.add('main');

    const info = document.createElement('section');
    info.classList.add('info');
    info.append(this.info);

    const plans = document.createElement('section');
    plans.classList.add('plans');
    plans.append(this.plans);

    const events = document.createElement('section');
    events.classList.add('events');
    events.append(this.events);

    main.append(info, plans, events);
    return main;
  }
}
