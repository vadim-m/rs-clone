import { IParamsLineOfEvent } from '../types';

export function lineOfEvent(event: string, paramsObj: IParamsLineOfEvent) {
  return `  <div class="${event}__item ${event}__item_${paramsObj.idAndClass}
             relative col-span-${paramsObj.size} z-1">
                <span class="${event}__icon_${paramsObj.idAndClass} absolute top-0">${paramsObj.icon}</span>
                <span id="${event}__title_${paramsObj.idAndClass}" 
                      class="${event}__title ${event}__title_${paramsObj.idAndClass}
                      absolute top-0 left-8 pointer-events-none">
                      ${paramsObj.textTitle}${paramsObj.units ? paramsObj.units : ''}
                </span>
                <input id="${event}__input_${paramsObj.idAndClass}"
                       list="${event}__list_${paramsObj.idAndClass}"
                       class="${event}__input ${event}__input_${paramsObj.idAndClass}
                      w-full m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline dark:rounded-md dark:bg-slate-400"
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
