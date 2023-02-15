import { IParamsLineOfEvent } from '../../types';
import { getDateTime } from '../../utilits/getDateTimeFunc';
import { icon } from '../../components/iconObj';
import { getMoney, getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';

const type: IParamsLineOfEvent = {
  idAndClass: 'type',
  textTitle: eventLang().type,
  icon: icon.gear,
  typeInput: 'search',
  size: 'full',
  required: true,
  option: createHTMLDatalistForType(),
};

const name: IParamsLineOfEvent = {
  idAndClass: 'name',
  textTitle: eventLang().name,
  icon: icon.pen,
  typeInput: 'text',
  size: 'full',
  required: false,
};

const costWorks: IParamsLineOfEvent = {
  idAndClass: 'cost-works',
  textTitle: eventLang().costWorks,
  icon: icon.cost,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getMoney('BY'),
};

const total: IParamsLineOfEvent = {
  idAndClass: 'total',
  textTitle: eventLang().amount,
  icon: icon.wallet,
  typeInput: 'number',
  size: '1/2',
  required: false,
  units: getMoney('BY'),
};

const date: IParamsLineOfEvent = {
  idAndClass: 'date',
  textTitle: eventLang().date,
  icon: icon.date,
  typeInput: 'datetime-local',
  size: '1/2',
  required: false,
  value: getDateTime(),
};

const mileage: IParamsLineOfEvent = {
  idAndClass: 'mileage',
  textTitle: eventLang().mileage,
  icon: icon.mileage,
  typeInput: 'number',
  size: '1/4',
  required: true,
  units: getUnits().distance,
};

const place: IParamsLineOfEvent = {
  idAndClass: 'place',
  textTitle: eventLang().place,
  icon: icon.place,
  typeInput: 'text',
  size: 'full',
  required: false,
};
const notes: IParamsLineOfEvent = {
  idAndClass: 'notes',
  textTitle: eventLang().comments,
  icon: icon.comments,
  typeInput: 'text',
  size: 'full',
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

/*   ${lineOfEvent(
        'service',
        'type',
        eventLang().type,
        icon.gear,
        'search',
        'full',
        'yes',
        createHTMLDatalistTypeService()
      )}
      ${lineOfEvent('service', 'name', eventLang().name, icon.pen, 'text', 'full')}

        <div id="service__total_container" class="service__total_container flex justify-between">
              ${lineOfEvent(
                'service',
                'cost-works',
                eventLang().costWorks,
                icon.cost,
                'number',
                '48',
                '',
                '',
                getMoney('BY')
              )}
                ${lineOfEvent(
                  'service',
                  'total',
                  eventLang().amount,
                  icon.wallet,
                  'number',
                  '48',
                  '',
                  '',
                  getMoney('BY')
                )}
        </div>
        <div id="service__time_container" class="service__time_container flex justify-between">
                ${lineOfEvent(
                  'service',
                  'date',
                  eventLang().date,
                  icon.date,
                  'datetime-local',
                  '48',
                  '',
                  '',
                  '',
                  getDateTime()
                )}
                ${lineOfEvent('service', 'mileage', eventLang().mileage, icon.mileage, 'number', '48')}
        </div>
          ${lineOfEvent('service', 'place', eventLang().place, icon.place, 'text', 'full')}
          ${lineOfEvent('service', 'notes', eventLang().comments, icon.comments, 'text', 'full')} */

function createHTMLDatalistForType() {
  return `
    <option value="${eventLang().maintenance}">
    <option value="${eventLang().repair}">
    <option value="${eventLang().replacement}">
    <option value="${eventLang().tuninge}">
    <option value="${eventLang().sparePart}">
    <option value="${eventLang().diagnostics}">
    <option value="${eventLang().other}">`;
}
