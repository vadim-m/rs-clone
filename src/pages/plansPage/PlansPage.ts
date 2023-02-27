import { PlansList } from './PlansList';
import { PlansSearch } from './PlansSelect';
import { eventLang } from '../../lang/addEventLang';
import { showPlans } from '../reminderAddPage/paramsForLineEvent';
// import { Reminder } from '../reminderAddPage/reminder';
import { currentLiArr, searchLi } from '../../utilits/searchElement';
import { Popup } from '../../components/popup';
import { buttonLang } from '../../lang/buttonLang';
import { createArrPlans } from './arrayReminders';

export class PlansPage {
  private search = new PlansSearch().element;
  page = 'plans';
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
    this.addDefaultRemind();
    this.handlerReminder();
  }

  rerenderList() {
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
      this.rerenderList();
    });
  }

  addDefaultRemind() {
    this.listContainer.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, this.listContainer);
      const curID = currentLiArr[0].id;
      if ((event.target as HTMLElement).matches('.reminder-add__btn')) {
        window.location.href = `/reminder?id=${curID}&pageCall=${this.page}`;
      }
    });
  }

  handlerReminder() {
    this.listContainer.addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, this.listContainer);
      const curID = currentLiArr[0].id;

      const curReminderObj = createArrPlans(showPlans.myPlans).filter((e) => e.id === curID)[0];
      if (currentLiArr[0].getAttribute('data-default') === 'false') {
        new Popup(
          `<p class="mb-20 text-center">${curReminderObj.textName}</p>`,
          buttonLang().edit,
          'confirm__btn--edit',
          'confirm__btn--edit',
          buttonLang().completed,
          'confirm__btn--completed',
          'confirm__btn--completed'
        );
        const popup = document.querySelector('.popup__container') as HTMLElement;
        popup.addEventListener('click', (event) => {
          if ((event.target as HTMLElement).matches('.confirm__btn--completed')) {
            if (currentLiArr[0].getAttribute('data-typeService') === eventLang().other) {
              window.location.href = `/other?id=${curReminderObj.id}&pageCall=${this.page}`;
            } else {
              window.location.href = `/service?id=${curReminderObj.id}&pageCall=${this.page}`;
            }
          }
          if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
            window.location.href = `/reminder?id=${curReminderObj.id}&pageCall=${this.page}&edit=true`;
          }
        });
      }
    });
  }

  createElement() {
    const parent = document.querySelector('.main') as HTMLElement;
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const plans = document.createElement('section');
    this.list = document.createElement('section');
    this.list.classList.add('plans__section-list');
    plans.classList.add('plans');
    this.list.append(new PlansList(showPlans.allPlans).element);
    plans.append(this.search, this.list);

    parent.append(plans);
  }
}
