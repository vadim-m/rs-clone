import { ButtonAddNew } from '../ButtonAddNew';

export class EventsHeader {
  public element: HTMLElement;
  private button = new ButtonAddNew().element;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add('events__header');
    element.classList.add('pt-3');
    element.classList.add('pb-3');
    element.classList.add('flex');
    element.classList.add('justify-between');

    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <h1 class="events__title font-bold text-2xl">События</h1>
    `;

    element.append(fragment.content, this.button);

    return element;
  }
}
