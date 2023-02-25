import { IParamsLineOfEvent } from '../../types';
import { getDateTime, getDatePlusMonths, getDatePlusYear } from '../../utilits/dateTimeFunc';
import { icon } from '../../components/iconObj';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { createHTMLDatalistForType } from '../serviceAddPage/paramsForLineEvent';
import { getCurrentLanguage } from '../../utilits/getCurrentSettings';

const type: IParamsLineOfEvent = {
  idAndClass: 'type',
  textTitle: eventLang().type,
  icon: icon.gear,
  typeInput: 'search',
  size: '2',
  required: true,
  option: createHTMLDatalistForType(),
};

const name: IParamsLineOfEvent = {
  idAndClass: 'name',
  textTitle: eventLang().name,
  icon: icon.pen,
  typeInput: 'search',
  size: '2',
  required: false,
};

const previosDate: IParamsLineOfEvent = {
  idAndClass: 'previos-date',
  textTitle: eventLang().previosDate,
  icon: icon.date,
  typeInput: 'date',
  size: '1',
  required: false,
};
const previosMileage: IParamsLineOfEvent = {
  idAndClass: 'previos-mileage',
  textTitle: eventLang().previosMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1',
  required: false,
  units: getUnits().distance,
};
const onMileage: IParamsLineOfEvent = {
  idAndClass: 'on-mileage',
  textTitle: eventLang().onMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1',
  required: true,
  units: getUnits().distance,
};
const afterMileage: IParamsLineOfEvent = {
  idAndClass: 'after-mileage',
  textTitle: eventLang().afterMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1',
  required: false,
  units: getUnits().distance,
};

const onDate: IParamsLineOfEvent = {
  idAndClass: 'on-date',
  textTitle: eventLang().onDate,
  icon: icon.date,
  typeInput: 'date',
  size: '1',
  required: true,
  option: createHTMLSelectDate(),
};

const repeat: IParamsLineOfEvent = {
  idAndClass: 'repeat',
  textTitle: eventLang().repeat,
  icon: icon.repeat,
  typeInput: 'checkbox',
  size: '1',
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

export const paramsCollectionReminder: IParamsLineOfEvent[] = [
  type,
  name,
  previosDate,
  previosMileage,
  onMileage,
  afterMileage,
  onDate,
  repeat,
  notes,
];

export const showPlans = {
  myMaintenance: 'myMaintenance',
  myPlans: 'myPlans',
  allPlans: 'allPlans',
};

function createHTMLSelectDate() {
  console.log(new Date(getDateTime().slice(0, 10)).setDate(new Date(getDateTime()).getDate() + 7));
  return `
    <option value="${getDatePlusMonths(1)}" label="${eventLang().after} ${eventLang().month}">
    <option value="${getDatePlusMonths(3)}" label="${eventLang().after} 3 ${eventLang().month}${
    getCurrentLanguage() === 'RU' ? 'а' : ''
  }">
    <option value="${getDatePlusMonths(6)}" label="${eventLang().after} 6 ${eventLang().month}${
    getCurrentLanguage() === 'RU' ? 'ев' : ''
  }">
    <option value="${getDatePlusMonths(9)}" label="${eventLang().after} 9 ${eventLang().month}${
    getCurrentLanguage() === 'RU' ? 'ев' : ''
  }">
    <option value="${getDatePlusYear(1)}" label="${eventLang().after} ${eventLang().year}">

    `;
}
