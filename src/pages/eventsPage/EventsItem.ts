import { getUnits } from '../../components/units';
import { defaultSettings } from '../../constants/constants';
import { setUserSettings } from '../../helpers/authentication';
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
      : setUserSettings(defaultSettings);
    return `
      <li id="${
        eventItem.id
      }" class="events__item bg-myslate relative rounded-lg flex justify-between gap-x-2 items-center py-3 pl-4 pr-2 shadow-md "
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

// export function oneOfReminder(paramsRemindObj: IParamsOneReminder) {
//   return `
//   <li id=${paramsRemindObj.id} class="plans__item plans__item_${
//     paramsRemindObj.id
//   } bg-myslate relative rounded-lg flex justify-between gap-x-2 items-center py-3 pl-4 pr-2 shadow-md" data-default="${
//     paramsRemindObj.reminderDefault
//   }" data-typeService="${paramsRemindObj.textType}">
//   ${
//     paramsRemindObj.reminderDefault === false
//       ? `<p class="plans__bar absolute bottom-12 right-0 label__after_plans text-white text-center text-xs px-2 py-1 mr-1 rounded-md">${
//           eventLang().after
//         } ${paramsRemindObj.label}</p>`
//       : ''
//   }
//       <div class="plans__item-and-icon flex items-start mr-2">
//         <span class="plans__icon_${paramsRemindObj.id}">${paramsRemindObj.icon}</span>
//         <div class="plans__text ml-2">
//           <h3 class="plans__title text-sm font-bold mb-1 leading-3">${paramsRemindObj.textName}</h3>
//           <span class="plans__addition text-xs leading-3 inline-block">${paramsRemindObj.textType}
//           </span>
//         </div>
//       </div>
//   ${
//     paramsRemindObj.reminderDefault === false
//       ? `<div class="plans__date text-xs font-bold text-end">${
//           paramsRemindObj.completeDate
//             ? new Date(paramsRemindObj.completeDate as string).toLocaleString(
//                 getCurrentLanguage() === 'EN' ? 'en-US' : 'ru',
//                 {
//                   year: 'numeric',
//                   month: 'short',
//                   day: 'numeric',
//                 }
//               )
//             : `${paramsRemindObj.completeMileage as string} ${getUnits().distance.slice(1)}`
//         }</div>`
//       : `${renderButtonBlue(eventLang().add, 'reminder-add__btn', 'reminder-add__btn', '1/2')}`
//   }
//               `;
// }
