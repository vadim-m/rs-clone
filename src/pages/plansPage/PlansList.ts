import { PlansItem } from './itemPlansPage';
import { createArrPlans } from './arrayReminders';

export class PlansList {
  public element: DocumentFragment;
  selectDisplayDOM!: HTMLSelectElement;
  constructor(showPlans: string) {
    this.element = this.createElement(showPlans);
  }

  createElement(showPlans: string) {
    const fragment = document.createElement('template');

    fragment.innerHTML = `
    <ul class="plans__list grid gap-y-3 mb-4 dark:text-black">
            ${createArrPlans(showPlans)
              .map((paramsRemindObj) => {
                return new PlansItem(paramsRemindObj).element;
              })
              .join('')}
    </ul>
    `;
    return fragment.content;
  }
}
