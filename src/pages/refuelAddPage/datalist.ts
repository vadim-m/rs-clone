import { eventLang } from '../../lang/addEventLang';

export function createHTMLDatalistFuel() {
  return `    
    <option value="${eventLang().petrol}-100">
    <option value="${eventLang().petrol}-98">
    <option value="${eventLang().petrol}-95">
    <option value="${eventLang().petrol}-92">
    <option value=${eventLang().diesel}>
    <option value="${eventLang().gasPropan}">
    <option value="${eventLang().gasMethane}">
    <option value="${eventLang().gasLPN}">`;
}
