import { eventLang } from '../../lang/addEventLang';
import { getSettingsFromLocal } from '../../utilits/getCurrentSettings';

export class StatisticChart1 {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    const settings = getSettingsFromLocal();
    return `
    <!--Slide 1-->
    <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
    <div class="carousel-item absolute opacity-0 hidden">
      <div class="block w-full bg-myslate h-10 shadow-md dark:bg-slate-400 dark:shadow-inner"></div>
      <div class="mb-6 flex flex-col">
        <div class="mt-2 text-center">${eventLang().totalExpenses}</div>
        <div class="flex justify-center">
          <canvas id="acquisitions" class="my-auto" style="max-width: 280px; max-height: 280px"></canvas>
        </div>
      </div>
      <div class="statistic__legend mb-8">
        <div class="statistic__fuels item flex pr-10 border-b border-t border-r border-slate">
          <div class="item__color w-4" style="background-color: rgb(250, 32, 32)"></div>
          <div class="item__inner flex justify-between w-full pl-2 py-2">
            <div class="item__title">${eventLang().refuels}</div>
            <div class="item__after"><span><span class="item__sum" id="stat1"></span> ${settings?.currency}</span></div>
          </div>
      </div>
      <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
        <div class="item__color w-4" style="background-color: rgb(54, 162, 235)"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2">
          <div class="item__title">${eventLang().service}</div>
          <div class="item__after"><span><span class="item__sum" id="stat2"></span> ${settings?.currency}</span></div>
        </div>
      </div>
      <div class="statistic__fuels item flex pr-10 border-b border-r border-slate">
        <div class="item__color w-4" style="background-color: rgb(255, 205, 86)"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2">
          <div class="item__title">${eventLang().anotherExp}</div>
          <div class="item__after"><span><span class="item__sum" id="stat3"></span> ${settings?.currency}</span></div>
        </div>
      </div>
      <div class="statistic__fuels item flex pr-2 border-b  border-l border-r border-slate">
        <div class="item__color w-4"></div>
        <div class="item__inner flex justify-between w-full pl-2 py-2 font-bold">
          <div class="item__title">${eventLang().total}</div>
          <div class="item__after"><span class="item__sum" id="stat4"></span><span id="stat__value"> ${
            settings?.currency
          }</span></div>
        </div>
      </div>
    </div>
  </div>
  
    <label for="carousel-3" class="prev control-1 absolute hidden text-xl leading-tight text-center z-10 top-2 left-0 ml-12">${
      eventLang().total
    } (${settings?.currency})</label>
    <label for="carousel-2" class="next control-1 absolute cursor-pointer hidden text-xl text-myblue hover:text-white leading-tight text-center z-10 top-2 right-0 mr-12">${
      eventLang().consumption
    }</label>
    `;
  }
}
