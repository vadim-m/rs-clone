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
    <div class="statistic__header flex flex-col justify-between py-3 relative">
      <span class="text-2xl font-bold mb-4">${eventLang().statistic}</span>
      <form class="flex flex-col justify-between md:items-end md:flex-row" id="calendar-form">
      <button class="statistic__button button text-base bg-myblue text-white px-7 py-1 rounded-md h-8 w-64 hover:bg-blue-700 focus:bg-blue-700" type="button" id="calendar-reset">${
        buttonLang().resetPeriod
      }</button>
        <label class="w-52 mb-4 flex justify-between md:m-0">
          <span class="font-bold mr-2">С: </span><input class="border-b-2 border-slateBorders focus:border-myblue text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 align-baseline mr-4 dark:rounded-md dark:bg-slate-400" id="calendar-before" type="date" value="" required="" min="" max="">
        </label>
        <label class="w-52 mb-4 flex justify-between md:m-0">
          <span class="font-bold mr-2">До: </span><input class="border-b-2 border-slateBorders focus:border-myblue text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 align-baseline mr-4 dark:rounded-md dark:bg-slate-400" id="calendar-after" type="date" value="" required="" min="" max="">
        </label>
        <button class="statistic__button button text-base bg-myblue text-white px-7 py-1 rounded-md h-8 w-64 hover:bg-blue-700 focus:bg-blue-700">${
          buttonLang().choosePeriod
        }</button>
      </form> 
      

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
