import { IParamsLineOfEvent } from '../../types';
import { getDateTime } from '../../utilits/getDateTimeFunc';
import { icon } from '../../components/iconObj';
import { getMoney, getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';

const name: IParamsLineOfEvent = {
  idAndClass: 'name',
  textTitle: eventLang().name,
  icon: icon.pen,
  typeInput: 'search',
  size: '2',
  required: true,
  option: createHTMLDatalistForName(),
};

const total: IParamsLineOfEvent = {
  idAndClass: 'total',
  textTitle: eventLang().cost,
  icon: icon.wallet,
  typeInput: 'number',
  size: '2',
  required: false,
  units: getMoney('BY'),
};

const mileage: IParamsLineOfEvent = {
  idAndClass: 'mileage',
  textTitle: eventLang().mileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '2',
  required: true,
  units: getUnits().distance,
};

const date: IParamsLineOfEvent = {
  idAndClass: 'date',
  textTitle: eventLang().date,
  icon: icon.date,
  typeInput: 'datetime-local',
  size: '2',
  required: false,
  value: getDateTime(),
};

const place: IParamsLineOfEvent = {
  idAndClass: 'place',
  textTitle: eventLang().place,
  icon: icon.place,
  typeInput: 'text',
  size: '2',
  required: false,
};
const notes: IParamsLineOfEvent = {
  idAndClass: 'notes',
  textTitle: eventLang().comments,
  icon: icon.comments,
  typeInput: 'text',
  size: '2',
  required: false,
};

function createHTMLDatalistForName() {
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

export const paramsCollectionOther: IParamsLineOfEvent[] = [name, total, mileage, date, place, notes];
