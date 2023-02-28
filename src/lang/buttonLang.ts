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
      choosePeriod: 'Apply the period',
      deleteCar: 'Delete car',
      applyChanges: 'Apply changes',
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
      choosePeriod: 'Применить период',
      deleteCar: 'Удалить машину',
      applyChanges: 'Применить изменения',
    };
  }
}
