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
      <select class="plans__menus_select appearance-none placeholder:text-slate-400 block bg-white w-full border border-myslate rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-myblue focus:ring-myblue focus:ring-1 text-m dark:bg-slate-500 dark:placeholder:text-slate-300 dark:border-slate-700 transition-none">
        <option>${eventLang().allPlans}</option>
        <option>${eventLang().myMaintenance}</option>
        <option>${eventLang().myPlans}</option>
      </select>
    </div>
    `;
    return fragment.content;
  }
}
