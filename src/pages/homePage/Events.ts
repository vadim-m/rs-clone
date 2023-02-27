import { createArrEvents, showEvents } from '../eventsPage/arrayEvents';
import { EventsItem } from '../eventsPage/EventsItem';
import { eventLang } from '../../lang/addEventLang';

// const funnel = require('../../assets/icons/funnel.png');
// const tires = require('../../assets/icons/tires.png');

export class Events {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = ` 
      <div class="relative py-2 rounded-lg bg-slate">
        <h2 class="events__title font-medium text-sm mb-2">${eventLang().recentEvents}</h2>
        <ul class="events__list grid gap-y-3 dark:text-black">
              ${createArrEvents(showEvents.all)
                .map((eventItem) => {
                  return new EventsItem(eventItem).element;
                })
                .slice(0, 2)
                .join('')}
        </ul>
      </div>
    `;

    return fragment.content;
  }
}
