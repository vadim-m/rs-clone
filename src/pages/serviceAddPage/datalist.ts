import { eventLang } from '../../lang/addEventLang';

export function createHTMLDatalistTypeService() {
  return `
    <option value="${eventLang().maintenance}">
    <option value="${eventLang().repair}">
    <option value="${eventLang().replacement}">
    <option value="${eventLang().tuninge}">
    <option value="${eventLang().sparePart}">
    <option value="${eventLang().diagnostics}">
    <option value="${eventLang().other}">`;
}
