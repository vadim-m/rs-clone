import { eventLang } from '../../lang/addEventLang';
import { buttonLang } from '../../lang/buttonLang';

import { StatisticCalendar } from './StatisticCalendar';

export class StatisticHeader {
  public element: string;
  private calendar = new StatisticCalendar().element;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="statistic__header flex justify-between py-3 relative">
      <span class="text-2xl font-bold">${eventLang().statistic}</span>
      <div>
      <input id="reminder__input_on-date" list="reminder__list_on-date" class="reminder__input reminder__input_on-date
        w-full m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline dark:rounded-md dark:bg-slate-400" type="date" value="" required="" min="" max="">
      <input id="reminder__input_on-date" list="reminder__list_on-date" class="reminder__input reminder__input_on-date
        w-full m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline dark:rounded-md dark:bg-slate-400" type="date" value="" required="" min="" max="">
      <button class="statistic__button button text-base bg-myblue text-white px-7 py-1 rounded-md h-8" id="open-calendar">${
        buttonLang().choosePeriod
      }</button>
      </div> 
      

      <div class="absolute hidden top-0 right-0 pl-5 pr-7 pt-8 pb-4 border w-350 shadow-lg rounded-md bg-white z-50 dark:bg-slate-600" id="modal">
        <button type="button" class="absolute right-1 top-1 bg-white rounded-md inline-flex items-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:text-myblue" id="calendar-close">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="calendar grid gap-2 relative mb-6">
           ${this.calendar}
        </div>
        
      </div>
    </div>
    `;
  }
}
