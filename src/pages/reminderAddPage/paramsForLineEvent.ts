import { IParamsLineOfEvent } from '../../types';
import { getDateTime } from '../../utilits/getDateTimeFunc';
import { icon } from '../../components/iconObj';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';

const type: IParamsLineOfEvent = {
  idAndClass: 'type',
  textTitle: eventLang().type,
  icon: icon.gear,
  typeInput: 'text',
  size: 'full',
  required: true,
};

const name: IParamsLineOfEvent = {
  idAndClass: 'name',
  textTitle: eventLang().name,
  icon: icon.pen,
  typeInput: 'text',
  size: 'full',
  required: false,
};

const previosDate: IParamsLineOfEvent = {
  idAndClass: 'previos-date',
  textTitle: eventLang().previosDate,
  icon: icon.date,
  typeInput: 'datetime-local',
  size: '1/2',
  required: false,
  value: getDateTime(),
};
const previosMileage: IParamsLineOfEvent = {
  idAndClass: 'previos-mileage',
  textTitle: eventLang().previosMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getUnits().distance,
};
const onMileage: IParamsLineOfEvent = {
  idAndClass: 'on-mileage',
  textTitle: eventLang().onMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getUnits().distance,
};
const afterMileage: IParamsLineOfEvent = {
  idAndClass: 'after-mileage',
  textTitle: eventLang().afterMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getUnits().distance,
};

const onDate: IParamsLineOfEvent = {
  idAndClass: 'on-date',
  textTitle: eventLang().onDate,
  icon: icon.date,
  typeInput: 'date',
  size: '1/2',
  required: false,
};
const afterDate: IParamsLineOfEvent = {
  idAndClass: 'after-date',
  textTitle: eventLang().afterDate,
  icon: icon.date,
  typeInput: 'date',
  size: '1/2',
  required: false,
};

const repeatTime: IParamsLineOfEvent = {
  idAndClass: 'repeat-time',
  textTitle: eventLang().repeatTime,
  icon: icon.repeat,
  typeInput: 'date',
  size: '1/2',
  required: false,
};

const repeatMileage: IParamsLineOfEvent = {
  idAndClass: 'repeat-mileage',
  textTitle: eventLang().repeatMileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getUnits().distance,
};

const notes: IParamsLineOfEvent = {
  idAndClass: 'notes',
  textTitle: eventLang().comments,
  icon: icon.comments,
  typeInput: 'text',
  size: 'full',
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
  afterDate,
  repeatTime,
  repeatMileage,
  notes,
];
