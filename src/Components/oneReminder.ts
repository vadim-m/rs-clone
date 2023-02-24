import { eventLang } from '../lang/addEventLang';
import { IParamsOneReminder } from '../types';

export function oneOfReminder(paramsRemindObj: IParamsOneReminder) {
  const a = paramsRemindObj;
  return a;
  // return `  <li class="reminder__item reminder__item_${paramsObj.class}
  //            relative col-span-${paramsObj.size} z-1">
  //               <span class="${event}__icon_${paramsObj.idAndClass} absolute top-0">${paramsObj.icon}</span>
  //               <span id="${event}__title_${paramsObj.idAndClass}"
  //                     class="${event}__title ${event}__title_${paramsObj.idAndClass}
  //                     absolute top-0 left-8 pointer-events-none">
  //                     ${paramsObj.textTitle}${paramsObj.units ? paramsObj.units : ''}
  //               </span>
  //               <input id="${event}__input_${paramsObj.idAndClass}"
  //                      list="${event}__list_${paramsObj.idAndClass}"
  //                      class="${event}__input ${event}__input_${paramsObj.idAndClass}
  //                     w-full m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline"
  //                      type="${paramsObj.typeInput}"
  //                      ${paramsObj.typeInput === 'number' ? 'step="0.01"' : ''}
  //                      value="${paramsObj.value ? paramsObj.value : ''}"
  //                      ${paramsObj.required === true ? 'required' : ''}
  //                      min="${paramsObj.min ? paramsObj.min : ''}"
  //                      max="${paramsObj.max ? paramsObj.max : ''}"/>
  //               ${
  //                 paramsObj.option
  //                   ? `<datalist id="${event}__list_${paramsObj.idAndClass}">${paramsObj.option}</datalist>`
  //                   : ''
  //               }
  //           </li>`;
}
// <li class="plans__item relative bg-myslate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
//     <div class="plans__bar absolute bottom-12 right-0 bg-myblue text-white text-xs px-3 py-1 rounded-md">Через 10 дней</div>
//     <div class="plans__item-and-icon flex items-center mr-2">
//       <img src="${carOil}" class="plans__image w-7 h-7 mr-4" alt="oil-icon">
//       <div class="plans__text">
//         <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
//         <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
//         </span>
//       </div>
//     </div>
//     <div class="plans__date text-xs font-bold text-end">25 дек. 2022г.</div>
//   </li>
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
