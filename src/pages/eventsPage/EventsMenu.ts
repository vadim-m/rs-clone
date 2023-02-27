import { eventLang } from '../../lang/addEventLang';

export class EventsMenu {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="events__menus grid grid-cols-1 gap-2 justify-between sm:grid-cols-2 mb-4">
    <div class="events__drop-down-menu drop-down relative inline-block text-left">
      <select class="events__menus_select appearance-none placeholder:text-slate-400 block bg-white w-full border border-myslate rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-myblue focus:ring-myblue focus:ring-1 text-m dark:bg-slate-500 dark:placeholder:text-slate-300 dark:border-slate-700 transition-none" ">
        <option>${eventLang().allEvents}</option>
        <option>${eventLang().refuels}</option>
        <option>${eventLang().service}</option>
        <option>${eventLang().other}</option>
      </select>
    </div>

  </div>
    `;
  }
}
