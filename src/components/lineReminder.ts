import { eventLang } from '../lang/addEventLang';
import { IParamsOneReminder } from '../types';
import { getCurrentLanguage } from '../utilits/getCurrentSettings';
import { renderButtonBlue } from './button';
import { getUnits } from './units';

export function oneOfReminder(paramsRemindObj: IParamsOneReminder) {
  return `
  <li id=${paramsRemindObj.id} class="plans__item plans__item_${
    paramsRemindObj.id
  } bg-myslate relative rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md" data-default="${
    paramsRemindObj.reminderDefault
  }" data-typeService="${paramsRemindObj.textType}">
  ${
    paramsRemindObj.reminderDefault === false
      ? `<p class="plans__bar absolute bottom-12 right-0 bg-myblue text-white text-xs px-3 py-1 rounded-md">${
          eventLang().after
        } ${paramsRemindObj.label}</p>`
      : ''
  }
      <div class="plans__item-and-icon flex items-start mr-2">
        <span class="plans__icon_${paramsRemindObj.id}">${paramsRemindObj.icon}</span>
        <div class="plans__text ml-2">
          <h3 class="plans__title text-sm font-bold mb-1 leading-3">${paramsRemindObj.textName}</h3>
          <span class="plans__addition text-xs leading-3 inline-block">${paramsRemindObj.textType}
          </span>
        </div>
      </div>
  ${
    paramsRemindObj.reminderDefault === false
      ? `<div class="plans__date text-xs font-bold text-end">${
          paramsRemindObj.completeDate
            ? new Date(paramsRemindObj.completeDate as string).toLocaleString(
                getCurrentLanguage() === 'EN' ? 'en-US' : 'ru',
                {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }
              )
            : `${paramsRemindObj.completeMileage as string} ${getUnits().distance.slice(1)}`
        }</div>`
      : `${renderButtonBlue(eventLang().add, 'reminder-add__btn', 'reminder-add__btn', '1/2')}`
  }
              `;
}
export const maintenanceArr = [
  eventLang().changingOil,
  eventLang().airFilter,
  eventLang().fuelFilter,
  eventLang().interiorFilter,
  eventLang().brakePadsFront,
  eventLang().brakePadsRear,
  eventLang().timingBelts,
  eventLang().sparkPlugs,
  eventLang().antifreeze,
  eventLang().transmissionOil,
  eventLang().diagnosticsSuspension,
  eventLang().diagnosticsElectrical,
  eventLang().winterTires,
  eventLang().summerTires,
  eventLang().carBattery,
  eventLang().inshurance,
  eventLang().techInspect,
  eventLang().tax,
];
