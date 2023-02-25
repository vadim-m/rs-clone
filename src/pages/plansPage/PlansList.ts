import { oneOfReminder } from '../../components/oneReminder';
import { createArrPlans } from './paramsOneReminder';

export class PlansList {
  public element: DocumentFragment;
  selectDisplayDOM!: HTMLSelectElement;
  constructor(showPlans: string) {
    this.element = this.createElement(showPlans);
  }

  createElement(display: string) {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
    <ul class="plans__list grid gap-y-3 mb-4">
            
            ${createArrPlans(display)
              .map((paramsRemindObj) => {
                return oneOfReminder(paramsRemindObj);
              })
              .join('')}
    </ul>
    `;
    return fragment.content;
  }
}
