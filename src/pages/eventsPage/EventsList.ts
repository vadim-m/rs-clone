import { createArrEvents } from './arrayEvents';
import { EventsItem } from './EventsItem';

export class EventsList {
  public element: string;
  // private item = new EventsItem().element;

  constructor(showEvents: string) {
    this.element = this.createElement(showEvents);
    // createArrEvents(showEvents);
  }

  private createElement(showEvents: string): string {
    return `
        <ul class="events__list grid gap-y-3">
            ${createArrEvents(showEvents)
              .map((eventItem) => {
                return new EventsItem(eventItem).element;
              })
              .join('')}
        </ul>
    `;
  }
}
