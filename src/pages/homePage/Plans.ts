import { createArrPlans } from '../plansPage/arrayReminders';
import { oneOfReminder } from '../plansPage/itemPlansPage';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
import { eventLang } from '../../lang/addEventLang';

export class Plans {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <h2 class="plans__title font-medium text-sm mb-2">${eventLang().nearestPlans}</h2>
        <ul class="plans__list grid gap-y-3 mb-4 dark:text-black">
          ${createArrPlans(showPlans.allPlans)
            .map((paramsRemindObj) => {
              return oneOfReminder(paramsRemindObj);
            })
            .slice(0, 3)
            .join('')}
      </ul>
    `;

    return fragment.content;
  }
}
