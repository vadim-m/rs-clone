export function lineSelect(
  pageEvent: string,
  idAndClass: string,
  textTitle: string,
  icon: string,
  option1: string,
  option2: string
) {
  return `  <div class="${pageEvent}__item">
                <span class="${pageEvent}__icon">${icon}</span>
                <span class="${pageEvent}__title ${pageEvent}__title_${idAndClass}">${textTitle}</span>  
            <select class="${pageEvent}__select-category">
                <option class="${pageEvent}__option" value="0">${option1}</option>
                <option class="${pageEvent}__option" value="1">${option2}</option>
            </select>
          </div>`;
}
