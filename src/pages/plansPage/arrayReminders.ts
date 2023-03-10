import { ICarData, IParamsOneReminder, IReminders } from '../../types';
import { carData } from '../../car/car_data';
import { getUnits } from '../../components/units';
import { eventLang } from '../../lang/addEventLang';
import { diffDates } from '../../utilits/mathSpend';
import { getDateTime } from '../../utilits/dateTimeFunc';
const carRepair = require('../../assets/icons/car-repair-grey.svg');
const carRepairColor = require('../../assets/icons/car-repair-color.svg');

// График ТО
export function collectionPlansArr(): IParamsOneReminder[] {
  const changingOil: IParamsOneReminder = {
    class: 'changingOil',
    textName: eventLang().changingOil,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'changingOil',
  };

  const airFilter: IParamsOneReminder = {
    class: 'airFilter',
    textName: eventLang().airFilter,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'airFilter',
  };

  const fuelFilter: IParamsOneReminder = {
    class: 'fuelFilter',
    textName: eventLang().fuelFilter,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'fuelFilter',
  };

  const interiorFilter: IParamsOneReminder = {
    class: 'interiorFilter',
    textName: eventLang().interiorFilter,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'interiorFilter',
  };
  const brakePadsFront: IParamsOneReminder = {
    class: 'brakePadsFront',
    textName: eventLang().brakePadsFront,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'brakePadsFront',
  };
  const brakePadsRear: IParamsOneReminder = {
    class: 'brakePadsRear',
    textName: eventLang().brakePadsRear,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'brakePadsRear',
  };
  const brakeFluid: IParamsOneReminder = {
    class: 'brakeFluid',
    textName: eventLang().brakeFluid,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'brakeFluid',
  };
  const timingBelts: IParamsOneReminder = {
    class: 'timingBelts',
    textName: eventLang().timingBelts,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'timingBelts',
  };
  const sparkPlugs: IParamsOneReminder = {
    class: 'sparkPlugs',
    textName: eventLang().sparkPlugs,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'sparkPlugs',
  };
  const antifreeze: IParamsOneReminder = {
    class: 'antifreeze',
    textName: eventLang().antifreeze,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'antifreeze',
  };
  const transmissionOil: IParamsOneReminder = {
    class: 'transmissionOil',
    textName: eventLang().transmissionOil,
    textType: eventLang().maintenance,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'transmissionOil',
  };
  const diagnosticsSuspension: IParamsOneReminder = {
    class: 'diagnosticsSuspension',
    textName: eventLang().diagnosticsSuspension,
    textType: eventLang().diagnostics,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'diagnosticsSuspension',
  };
  const diagnosticsElectrical: IParamsOneReminder = {
    class: 'antifreeze',
    textName: eventLang().diagnosticsElectrical,
    textType: eventLang().diagnostics,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'diagnosticsElectrical',
  };
  const winterTires: IParamsOneReminder = {
    class: 'winterTires',
    textName: eventLang().winterTires,
    textType: eventLang().replacement,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'winterTires',
  };
  const summerTires: IParamsOneReminder = {
    class: 'summerTires',
    textName: eventLang().summerTires,
    textType: eventLang().replacement,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'summerTires',
  };
  const carBattery: IParamsOneReminder = {
    class: 'carBattery',
    textName: eventLang().carBattery,
    textType: eventLang().replacement,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'carBattery',
  };
  const techInspect: IParamsOneReminder = {
    class: 'techInspect',
    textName: eventLang().techInspect,
    textType: eventLang().other,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'techInspect',
  };
  const tax: IParamsOneReminder = {
    class: 'tax',
    textName: eventLang().tax,
    textType: eventLang().other,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'tax',
  };
  const inshurance: IParamsOneReminder = {
    class: 'inshurance',
    textName: eventLang().inshurance,
    textType: eventLang().other,
    icon: `<img src="${carRepair}" class="h-8 w-8" alt="car-repair icon">`,
    reminderDefault: true,
    id: 'inshurance',
  };

  return [
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
}
export function createArrPlans(showPlansValue: string): IParamsOneReminder[] {
  const myCarData: ICarData = localStorage.getItem('car') ? JSON.parse(localStorage.getItem('car') as string) : carData;
  const myReminderArr: IReminders[] = myCarData.event.reminders;
  const myRemindersPlans: IParamsOneReminder[] = [];
  const myRemindersDefault: IParamsOneReminder[] = [];

  myReminderArr.forEach((e) => {
    return myRemindersPlans.push({
      class: `reminder-${e.id}`,
      textName: e.name,
      textType: e.type,
      icon: `<img src="${carRepairColor}" class="h-8 w-8" alt="car-repair icon">`,
      reminderDefault: false,
      completeDate: `${e.rememberOnDate ? e.rememberOnDate : ''}`,
      completeMileage: `${e.rememberOnMilege ? e.rememberOnMilege : ''}`,
      label: `${
        e.rememberOnDate
          ? `${diffDates(e.rememberOnDate, getDateTime()).toFixed(0)} ${eventLang().day}`
          : `${+e.rememberOnMilege - +myCarData.indicators.curMileage}${getUnits().distance.slice(1)}`
      }`,
      id: e.id,
    });
  });
  collectionPlansArr().forEach((e) => {
    return myRemindersDefault.push({
      class: e.class,
      textName: e.textName,
      textType: e.textType,
      icon: e.icon,
      reminderDefault: true,
      id: e.id,
    });
  });

  if (showPlansValue === 'myMaintenance') {
    return myRemindersDefault.filter((e) =>
      myRemindersPlans.length > 0 ? !myRemindersPlans.some((x) => x.id === e.id) : true
    );
  }
  if (showPlansValue === 'myPlans') {
    return myRemindersPlans.sort((a, b) => {
      return a.completeDate
        ? +new Date(a.completeDate as string) - +new Date(b.completeDate as string)
        : +(a.completeMileage as string) - +(b.completeMileage as string);
    });
  } else {
    return [
      ...myRemindersPlans,
      ...myRemindersDefault.filter((e) =>
        myRemindersPlans.length > 0 ? !myRemindersPlans.some((x) => x.id === e.id) : true
      ),
    ];
  }
}
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
