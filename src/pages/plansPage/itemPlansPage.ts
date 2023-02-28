import { eventLang } from '../../lang/addEventLang';
import { IParamsOneReminder } from '../../types';
import { getCurrentLanguage } from '../../utilits/getCurrentSettings';
import { paramsButton, renderButton } from '../../components/button';
import { getUnits } from '../../components/units';

export function oneOfReminder(paramsRemindObj: IParamsOneReminder) {
  return `
  <li id=${paramsRemindObj.id} class="plans__item plans__item_${
    paramsRemindObj.id
  } bg-myslate relative rounded-lg flex justify-between gap-x-2 items-center py-3 px-4 shadow-md" data-default="${
    paramsRemindObj.reminderDefault
  }" data-typeService="${paramsRemindObj.textType}">
  ${
    paramsRemindObj.reminderDefault === false
      ? `<p class="plans__bar absolute bottom-12 right-0 label__after_plans text-white text-center text-xs px-2 py-1 mr-1 rounded-md">${
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
                getCurrentLanguage() === 'English' ? 'en-US' : 'ru',
                {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }
              )
            : `${paramsRemindObj.completeMileage as string} ${getUnits().distance.slice(1)}`
        }</div>`
      : `${renderButton(eventLang().add, 'reminder-add__btn', paramsButton.blueXS)}`
  }
              `;
}
