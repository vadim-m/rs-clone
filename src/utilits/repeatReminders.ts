import { deleteReminder, updateReminder } from '../helpers/api';
import { setCarDataFromDB } from '../helpers/localStorage';
import { ICarData, IReminders } from '../types';
import { getSumDate } from './dateTimeFunc';

export function updateReminderRepeat(
  carData: ICarData,
  name: HTMLInputElement,
  date: HTMLInputElement,
  mileage: HTMLInputElement
) {
  carData.event.reminders.forEach(async (e) => {
    if (e.name === name.value) {
      if (e.repeat === true) {
        const reminder: IReminders = {
          type: e.type,
          name: e.name,
          previosDate: e.previosDate,
          previosMileage: e.previosMileage,
          rememberOnMilege: String(+e.rememberAfterMilege + +mileage.value),
          rememberAfterMilege: e.rememberAfterMilege,
          rememberOnDate: e.rememberOnDate ? getSumDate(date.value, e.rememberAfterDate) : '',
          rememberAfterDate: e.rememberAfterDate,
          repeat: e.repeat,
          notes: e.notes,
          id: e.id,
          _id: e._id,
        };
        await updateReminder(reminder, e._id as string);
        await setCarDataFromDB();
      } else {
        await deleteReminder(e._id as string);
        await setCarDataFromDB();
      }
    }
  });
}
