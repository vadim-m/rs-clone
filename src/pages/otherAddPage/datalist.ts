import { eventLang } from '../../lang/addEventLang';

export function createHTMLDatalistOthersName() {
  return `
    <option value="${eventLang().carWash}">
    <option value="${eventLang().fine}">
    <option value="${eventLang().parking}">
    <option value="${eventLang().tollFare}">
    <option value="${eventLang().inshurance}">
    <option value="${eventLang().tax}">
    <option value="${eventLang().registration}">
    <option value="${eventLang().techInspect}">`;
}
