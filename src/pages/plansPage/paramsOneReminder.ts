import { ICarData, IParamsOneReminder, IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { icon } from '../../components/iconObj';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { diffDates } from '../../utilits/mathSpend';
import { getDateTime } from '../../utilits/getDateTimeFunc';

const myRemindersContainer: IParamsOneReminder[] = [];
// Созданное
const myCarData: ICarData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;

const myReminderArr: IReminders[] = myCarData.event.reminders;

myReminderArr.forEach((e) => {
  return myRemindersContainer.push({
    class: `reminder-${e.id}`,
    textName: e.name,
    textType: e.type,
    icon: icon.gear,
    reminderDefault: false,
    complete: `${e.rememberOnDate ? new Date(e.rememberOnDate) : e.rememberOnMilege}`,
    label: `${
      e.rememberOnDate
        ? diffDates(e.rememberOnDate, getDateTime())
        : `${+e.rememberOnMilege - myCarData.info.mileage} ${getUnits().distance}`
    }`,
    id: e.id,
  });
});

export const myRemindersForParams = myRemindersContainer;
// График ТО
const changingOil: IParamsOneReminder = {
  class: 'changingOil',
  textName: eventLang().changingOil,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'changingOil',
};

const airFilter: IParamsOneReminder = {
  class: 'airFilter',
  textName: eventLang().airFilter,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'airFilter',
};

const fuelFilter: IParamsOneReminder = {
  class: 'fuelFilter',
  textName: eventLang().fuelFilter,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'fuelFilter',
};

const interiorFilter: IParamsOneReminder = {
  class: 'interiorFilter',
  textName: eventLang().interiorFilter,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'interiorFilter',
};
const brakePadsFront: IParamsOneReminder = {
  class: 'brakePadsFront',
  textName: eventLang().brakePadsFront,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'brakePadsFront',
};
const brakePadsRear: IParamsOneReminder = {
  class: 'brakePadsRear',
  textName: eventLang().brakePadsRear,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'brakePadsRear',
};
const brakeFluid: IParamsOneReminder = {
  class: 'brakeFluid',
  textName: eventLang().brakeFluid,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'brakeFluid',
};
const timingBelts: IParamsOneReminder = {
  class: 'timingBelts',
  textName: eventLang().timingBelts,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'timingBelts',
};
const sparkPlugs: IParamsOneReminder = {
  class: 'sparkPlugs',
  textName: eventLang().sparkPlugs,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'sparkPlugs',
};
const antifreeze: IParamsOneReminder = {
  class: 'antifreeze',
  textName: eventLang().antifreeze,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'antifreeze',
};
const transmissionOil: IParamsOneReminder = {
  class: 'transmissionOil',
  textName: eventLang().transmissionOil,
  textType: eventLang().maintenance,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'transmissionOil',
};
const diagnosticsSuspension: IParamsOneReminder = {
  class: 'diagnosticsSuspension',
  textName: eventLang().diagnosticsSuspension,
  textType: eventLang().diagnostics,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'diagnosticsSuspension',
};
const diagnosticsElectrical: IParamsOneReminder = {
  class: 'antifreeze',
  textName: eventLang().diagnosticsElectrical,
  textType: eventLang().diagnostics,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'diagnosticsElectrical',
};
const winterTires: IParamsOneReminder = {
  class: 'winterTires',
  textName: eventLang().winterTires,
  textType: eventLang().replacement,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'winterTires',
};
const summerTires: IParamsOneReminder = {
  class: 'summerTires',
  textName: eventLang().summerTires,
  textType: eventLang().replacement,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'summerTires',
};
const carBattery: IParamsOneReminder = {
  class: 'carBattery',
  textName: eventLang().carBattery,
  textType: eventLang().replacement,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'carBattery',
};
const techInspect: IParamsOneReminder = {
  class: 'techInspect',
  textName: eventLang().techInspect,
  textType: eventLang().other,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'techInspect',
};
const tax: IParamsOneReminder = {
  class: 'tax',
  textName: eventLang().tax,
  textType: eventLang().other,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'tax',
};
const inshurance: IParamsOneReminder = {
  class: 'inshurance',
  textName: eventLang().inshurance,
  textType: eventLang().other,
  icon: icon.gear,
  reminderDefault: true,
  button: eventLang().add,
  id: 'inshurance',
};

export const maintenanceArr = [
  changingOil,
  airFilter,
  fuelFilter,
  interiorFilter,
  brakePadsFront,
  brakePadsRear,
  brakeFluid,
  timingBelts,
  sparkPlugs,
  antifreeze,
  transmissionOil,
  diagnosticsSuspension,
  diagnosticsElectrical,
  winterTires,
  summerTires,
  carBattery,
  techInspect,
  tax,
  inshurance,
];

export const allReminder = [...myRemindersForParams, ...maintenanceArr];
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
