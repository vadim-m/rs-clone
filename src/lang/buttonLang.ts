import { getCurrentLanguage } from '../utilits/getCurrentSettings';

export function buttonLang() {
  if (getCurrentLanguage() === 'English') {
    return {
      ok: 'OK',
      completed: 'Conpleted',
      cancel: 'Cancel',
      cancelForm: 'Cancel',
      add: 'Add',
      delete: 'Delete',
      save: 'Save',
      edit: 'Edit',
      option: '...',
      backtoHome: 'Back to homepage',
      exit: 'Exit',
      addNew: 'Add new',
      choosePeriod: 'Choose the period',
      deleteCar: 'Delete car',
    };
  } else {
    return {
      ok: 'OK',
      completed: 'Выполено',
      cancel: 'Отмена',
      cancelForm: 'Отменить',
      add: 'Добавить',
      delete: 'Удалить',
      save: 'Сохранить',
      edit: 'Изменить',
      option: '...',
      backtoHome: 'Перейти на главную',
      exit: 'Выйти',
      addNew: 'Добавить новое',
      choosePeriod: 'Выбрать период',
      deleteCar: 'Удалить машину',
    };
  }
}
