import { eventLang } from '../../lang/addEventLang';

export class PlansSearch {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
    <div class="plans__header pt-3 pb-3 flex justify-between">
      <h1 class="plans__title font-bold text-2xl">Планы</h1>
    </div>

    <div class="plans__menus grid grid-cols-1 gap-2 justify-between md:grid-cols-2 mb-8">
      <select class="plans__menus_select appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 dark:bg-slate-400">
        <option>${eventLang().allPlans}</option>
        <option>${eventLang().myMaintenance}</option>
        <option>${eventLang().myPlans}</option>
      </select>
    </div>
    `;
    return fragment.content;
  }
}
