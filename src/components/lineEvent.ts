export function lineOfEvent(
  pageEvent: string,
  idAndClass: string,
  textTitle: string,
  icon: string,
  typeInput: string,
  units?: string,
  value?: string | Date
) {
  return `  <div class="${pageEvent}__item">
                <span class="${pageEvent}__icon">${icon}</span>
                <span id="${pageEvent}__title_${idAndClass}" class="${pageEvent}__title ${pageEvent}__title_${idAndClass}">${textTitle}${
    units ? units : ''
  }</span>
                <input id="${pageEvent}__input_${idAndClass}" class="${pageEvent}__input ${pageEvent}__input_${idAndClass}" type="${typeInput}" value="${
    value ? value : ''
  }"/>
            </div>`;
}
