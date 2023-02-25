import { PlansList } from './PlansList';
import { PlansSearch } from './PlansSelect';
import { eventLang } from '../../lang/addEventLang';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';

export class PlansPage {
  private search = new PlansSearch().element;
  list: HTMLElement | undefined;
  parent: HTMLElement;
  addEventCircule!: HTMLElement;
  selectDisplayDOM!: HTMLSelectElement;
  listContainer: HTMLUListElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.selectDisplayDOM = document.querySelector('.plans__menus_select') as HTMLSelectElement;
    this.listContainer = document.querySelector('.plans__section-list') as HTMLUListElement;
    this.chooseDisplay();
  }

  rerenderPage() {
    const display =
      this.selectDisplayDOM.value === `${eventLang().myPlans}`
        ? showPlans.myPlans
        : this.selectDisplayDOM.value === `${eventLang().myMaintenance}`
        ? showPlans.myMaintenance
        : showPlans.allPlans;

    this.listContainer.innerHTML = '';
    (this.list as HTMLElement).append(new PlansList(display).element);
  }

  chooseDisplay() {
    this.selectDisplayDOM.addEventListener('change', () => {
      console.log(showPlans.myPlans);
      this.rerenderPage();
    });
  }
  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const plans = document.createElement('section');
    this.list = document.createElement('section');
    this.list.classList.add('plans__section-list');
    plans.classList.add('plans');
    this.list.append(new PlansList(showPlans.allPlans).element);
    plans.append(this.search, this.list);

    this.parent.append(plans);
  }
}
