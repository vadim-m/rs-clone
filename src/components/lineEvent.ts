export function lineOfEvent(
  pageEvent: string,
  idAndClass: string,
  textTitle: string,
  icon: string,
  typeInput: string,
  size: string,
  required?: string,
  option?: string,
  units?: string,
  value?: string | Date
) {
  return `  <div class="${pageEvent}__item flex flex-col relative w-${size} z-1">
                <span class="${pageEvent}__icon absolute top-0">${icon}</span>
                <span id="${pageEvent}__title_${idAndClass}" class="${pageEvent}__title ${pageEvent}__title_${idAndClass} absolute top-0 left-8 pointer-events-none">${textTitle}${
    units ? units : ''
  }</span>
                <input id="${pageEvent}__input_${idAndClass}" list="${pageEvent}__list_${idAndClass}" class="${pageEvent}__input ${pageEvent}__input_${idAndClass} flex m-0 border-b-2 border-slateBorders focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none h-6 pl-2 ml-6 align-baseline" type="${typeInput}" value="${
    value ? value : ''
  }" ${required ? 'required' : ''}/>
    ${
      option
        ? `<datalist id="${pageEvent}__list_${idAndClass}">
    ${option}
    </datalist>`
        : ''
    }
            </div>`;
}
