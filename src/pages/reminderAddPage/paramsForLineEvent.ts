import { IParamsLineOfEvent } from '../../types';
import { getDateTime } from '../../utilits/getDateTimeFunc';
import { icon } from '../../components/iconObj';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { createHTMLDatalistForType } from '../serviceAddPage/paramsForLineEvent';

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
  typeInput: 'datetime-local',
  size: '1',
  required: false,
  value: getDateTime(),
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
  required: false,
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
  required: false,
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

// const repeatMileage: IParamsLineOfEvent = {
//   idAndClass: 'repeat-mileage',
//   textTitle: eventLang().repeatMileage,
//   icon: icon.mileage,
//   typeInput: 'number',
//   size: '1',
//   required: false,
//   units: getUnits().distance,
// };

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

// function createHTMLDatalistForName() {
//   return `
//     <option value="${eventLang().changingOil}">
//     <option value="${eventLang().airFilter}">
//     <option value="${eventLang().fuelFilter}">
//     <option value="${eventLang().interiorFilter}">
//     <option value="${eventLang().brakePadsFront}">
//     <option value="${eventLang().brakePadsRear}">
//     <option value="${eventLang().brakeFluid}">
//     <option value="${eventLang().timingBelts}">
//     <option value="${eventLang().sparkPlugs}">
//     <option value="${eventLang().antifreeze}">
//     <option value="${eventLang().transmissionOil}">
//     <option value="${eventLang().diagnosticsSuspension}">
//     <option value="${eventLang().diagnosticsElectrical}">
//     <option value="${eventLang().WinterTires}">
//     <option value="${eventLang().SummerTires}">
//     <option value="${eventLang().carBattery}">
//     <option value="${eventLang().inshurance}">
//     <option value="${eventLang().techInspect}">
//     <option value="${eventLang().tax}">
//     `;
// }

// function createHTMLSelectNumber() {
//   return `
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//     <option value="6">6</option>
//     <option value="7">7</option>
//     <option value="8">8</option>
//     <option value="9">9</option>
//     <option value="10">10</option>
//     <option value="11">11</option>
//     `;
// }
// <option value="2022-10-10 12:00" label="Сегодня днём">
//     <option value="2022-10-03T08:00" label="Неделю назад утром">
//     <option value="2022-10-17 17:00" label="Через неделю вечером">

function createHTMLSelectDate() {
  return `
    <option value="2022-10-03T08:00">
    <option value="2022-10-03T08:00">
    `;
}
