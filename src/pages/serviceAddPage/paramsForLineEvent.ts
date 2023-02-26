import { IParamsLineOfEvent } from '../../types';
import { getDateTime } from '../../utilits/dateTimeFunc';
import { icon } from '../../components/iconObj';
import { getMoney, getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';

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
  option: createHTMLDatalistForName(),
};

const costWorks: IParamsLineOfEvent = {
  idAndClass: 'cost-works',
  textTitle: eventLang().costWorks,
  icon: icon.cost,
  typeInput: 'number',
  size: '1',
  required: false,
  units: getMoney('BY'),
};

const total: IParamsLineOfEvent = {
  idAndClass: 'total',
  textTitle: eventLang().amount,
  icon: icon.wallet,
  typeInput: 'number',
  size: '1',
  required: false,
  units: getMoney('BY'),
};

const date: IParamsLineOfEvent = {
  idAndClass: 'date',
  textTitle: eventLang().date,
  icon: icon.date,
  typeInput: 'datetime-local',
  size: '1',
  required: false,
  value: getDateTime(),
};

const mileage: IParamsLineOfEvent = {
  idAndClass: 'mileage',
  textTitle: eventLang().mileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1',
  required: true,
  units: getUnits().distance,
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

export const paramsCollectionService: IParamsLineOfEvent[] = [
  type,
  name,
  costWorks,
  total,
  date,
  mileage,
  place,
  notes,
];

export function createHTMLDatalistForType() {
  return `
    <option value="${eventLang().maintenance}">
    <option value="${eventLang().repair}">
    <option value="${eventLang().replacement}">
    <option value="${eventLang().tuning}">
    <option value="${eventLang().sparePart}">
    <option value="${eventLang().diagnostics}">
    <option value="${eventLang().other}">`;
}

function createHTMLDatalistForName() {
  return `
    <option value="${eventLang().changingOil}">
    <option value="${eventLang().airFilter}">
    <option value="${eventLang().fuelFilter}">
    <option value="${eventLang().interiorFilter}">
    <option value="${eventLang().brakePadsFront}">
    <option value="${eventLang().brakePadsRear}">
    <option value="${eventLang().brakeFluid}">
    <option value="${eventLang().timingBelts}">
    <option value="${eventLang().sparkPlugs}">
    <option value="${eventLang().antifreeze}">
    <option value="${eventLang().transmissionOil}">
    <option value="${eventLang().diagnosticsSuspension}">
    <option value="${eventLang().diagnosticsElectrical}">
    <option value="${eventLang().winterTires}">
    <option value="${eventLang().summerTires}">
    <option value="${eventLang().carBattery}">`;
}
