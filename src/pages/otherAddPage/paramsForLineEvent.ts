import { IParamsLineOfEvent, ISettingsMyCar } from '../../types';
import { getDateTime } from '../../utilits/dateTimeFunc';
import { icon } from '../../components/iconFont';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { defaultSettings } from '../../constants/constants';

const setting: ISettingsMyCar = localStorage.getItem('settingsCar')
  ? JSON.parse(localStorage.getItem('settingsCar') as string)
  : defaultSettings;

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
  units: `, ${setting.currency}`,
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
