import { EventsItem } from './EventsItem';

export class EventsList {
  public element: string;
  private item = new EventsItem().element;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="events__list">
    <div class="events__splitter">
      <div class=" bg-myslate border-b border-slateBorders shadow-md dark:bg-slate-700">
        <div class="events__title container mx-auto flex justify-between font-bold text-sm py-2">
          <div class="events__date">
          28 февраля 2023г.
          </div>
          <div class="events__price">
          5 200 ₽
        </div>
      </div>
     </div>
     <div class="container mx-auto">
        <ul class="events__list grid gap-y-3">
          ${this.item}
        </ul>
     </div>
    </div>    
  </div>
    `;
  }
}
