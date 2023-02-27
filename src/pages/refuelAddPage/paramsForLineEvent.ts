import { IParamsLineOfEvent, ISettingsMyCar } from '../../types';
import { getDateTime } from '../../utilits/dateTimeFunc';
import { icon } from '../../components/iconFont';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { getCurrentPriceFuel } from '../../utilits/getCurrentSettings';
import { setUserSettings } from '../../helpers/authentication';
import { defaultSettings } from '../../constants/constants';

const setting: ISettingsMyCar = localStorage.getItem('settingsCar')
  ? JSON.parse(localStorage.getItem('settingsCar') as string)
  : setUserSettings(defaultSettings);

const name: IParamsLineOfEvent = {
  idAndClass: 'type-fuel',
  textTitle: eventLang().typeFuel,
  icon: icon.gasPump,
  typeInput: 'search',
  size: '1',
  required: true,
  option: createHTMLDatalistForFuel(),
};

const price: IParamsLineOfEvent = {
  idAndClass: 'price',
  textTitle: eventLang().price,
  icon: icon.coins,
  typeInput: 'number',
  size: '1',
  required: true,
  value: getCurrentPriceFuel(),
  units: `, ${setting.currency}/${getUnits().volume.slice(2)}`,
};

const amountFuel: IParamsLineOfEvent = {
  idAndClass: 'amount-fuel',
  textTitle: eventLang().quant,
  icon: icon.quantFuel,
  typeInput: 'number',
  size: '1',
  required: true,
  units: getUnits().volume,
};
const amountPrice: IParamsLineOfEvent = {
  idAndClass: 'total',
  textTitle: eventLang().amount,
  icon: icon.wallet,
  typeInput: 'number',
  size: '1',
  required: true,
  units: `, ${setting.currency}`,
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
const tankFull: IParamsLineOfEvent = {
  idAndClass: 'tank-full',
  textTitle: eventLang().tankFull,
  icon: icon.gasPump,
  typeInput: 'checkbox',
  size: '1',
  required: false,
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

export const paramsCollectionRefuel: IParamsLineOfEvent[] = [
  name,
  price,
  amountFuel,
  amountPrice,
  mileage,
  tankFull,
  date,
  place,
  notes,
];

export function createHTMLDatalistForFuel() {
  return `    
    <option value="${eventLang().petrol}-100">
    <option value="${eventLang().petrol}-98">
    <option value="${eventLang().petrol}-95">
    <option value="${eventLang().petrol}-92">
    <option value="${eventLang().diesel}">
    <option value="${eventLang().gasPropan}">
    <option value="${eventLang().gasMethane}">
    <option value="${eventLang().gasLPN}">`;
}
