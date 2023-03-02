import { getUnits } from '../../components/units';
import { defaultSettings } from '../../constants/constants';
import { eventLang } from '../../lang/addEventLang';
import { IParamsOneEvents, ISettingsMyCar } from '../../types';
import { getCurrentLanguage } from '../../utilits/getCurrentSettings';

export class EventsItem {
  public element: string;

  constructor(eventItem: IParamsOneEvents) {
    this.element = this.createElement(eventItem);
  }

  private createElement(eventItem: IParamsOneEvents): string {
    const setting: ISettingsMyCar = localStorage.getItem('settingsCar')
      ? JSON.parse(localStorage.getItem('settingsCar') as string)
      : defaultSettings;
    return `
      <li id="${
        eventItem.id
      }" class="events__item bg-myslate relative rounded-lg flex justify-between gap-x-2 items-center py-3 pl-4 pr-2 shadow-md dark:bg-slate-300"
      data-event="${eventItem.eventType}">
        <div class="events__item-and-icon flex items-center mr-2">
        ${eventItem.icon}
          <div class="events__text flex flex-col">
            <p class="events__addition text-xs leading-3 inline-block mb-1">
            ${eventItem.mileage}${getUnits().distance.slice(1)}.
            </p>
            <h3 class="events__title text-sm font-bold mb-1 leading-4">
            ${eventItem.titleName}
            ${eventItem.eventType === 'refuel' ? `/ ${eventItem.amountFuel}${getUnits().volume.slice(1)}.` : ''}
            </h3>
            <span class="events__addition text-xxs leading-3 inline-block mb-1">
            ${
              eventItem.eventType !== 'refuel' ? `${eventItem.titleType ? eventItem.titleType : eventLang().other}` : ''
            }
            </span>
            <span class="events__addition text-xxs leading-3 inline-block">
            ${eventItem.place ? eventItem.place : ''}
            </span>
          </div>
        </div>
        <div class="events__date-and-price">
          <div class="events__price text-xs font-bold mb-1 text-end">
          ${eventItem.totalPrice} ${setting.currency}
          </div>
          <div class="events__date text-xxs leading-3 text-end">
          ${new Date(eventItem.date as string).toLocaleString(getCurrentLanguage() === 'English' ? 'en-US' : 'ru', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}</div>
        </div>
      </li>
    `;
  }
}
