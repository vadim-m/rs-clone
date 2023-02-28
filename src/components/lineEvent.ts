import { IParamsLineOfEvent } from '../types';

export function lineOfEvent(event: string, paramsObj: IParamsLineOfEvent) {
  // if (event === 'reminder' && (paramsObj.idAndClass === 'after-date' || paramsObj.idAndClass === 'repeat-time')) {
  //   return `  <div class="${event}__item ${event}__item_${paramsObj.idAndClass}
  //            relative col-span-${paramsObj.size} z-1">
  //               <span id="${event}__title_${paramsObj.idAndClass}"
  //                     class="${event}__title ${event}__title_${paramsObj.idAndClass}
  //                     absolute left-8 pointer-events-none">
  //                     ${paramsObj.textTitle}${paramsObj.units ? paramsObj.units : ''}
  //               </span>
  //               <div class="w-full m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline ">
  //                   <select id="${event}__listN_${paramsObj.idAndClass}" class="absolute w-16 text-center">${
  //     paramsObj.option
  //   }</select>
  //                   <select id="${event}__listD_${paramsObj.idAndClass}"  class="ml-20">${paramsObj.option2}</select>
  //               </div>
  //           </div>`;
  // } else
  return `  <div class="${event}__item ${event}__item_${paramsObj.idAndClass}
             relative col-span-${paramsObj.size} z-1">
                <span id="${event}__title_${paramsObj.idAndClass}" 
                      class="${event}__title ${event}__title_${paramsObj.idAndClass}
                      absolute top-0 left-8 pointer-events-none">
                      ${paramsObj.textTitle}${paramsObj.units ? `${paramsObj.units}` : ''}
                </span>
                <span class="${event}__icon_${paramsObj.idAndClass} absolute">${paramsObj.icon}</span>
                <input id="${event}__input_${paramsObj.idAndClass}"
                       list="${event}__list_${paramsObj.idAndClass}"
                       class="${event}__input ${event}__input_${paramsObj.idAndClass}
                      w-[calc(100%_-_1.5rem)] m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline dark:rounded-md dark:bg-slate-400"
                       type="${paramsObj.typeInput}" 
                       ${paramsObj.typeInput === 'number' ? 'step="0.01"' : ''} 
                       value="${paramsObj.value ? paramsObj.value : ''}"
                       ${paramsObj.required === true ? 'required' : ''}
                       min="${paramsObj.min ? paramsObj.min : ''}"
                       max="${paramsObj.max ? paramsObj.max : ''}"/>
                ${
                  paramsObj.option
                    ? `<datalist id="${event}__list_${paramsObj.idAndClass}">${paramsObj.option}</datalist>`
                    : ''
                }
            </div>`;
}
