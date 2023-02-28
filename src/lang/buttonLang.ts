import { getCurrentLanguage } from '../utilits/getCurrentSettings';

export function buttonLang() {
  if (getCurrentLanguage() === 'English') {
    return {
      ok: 'OK',
      completed: 'Completed',
      cancel: 'Cancel',
      add: 'Add',
      delete: 'Delete',
      save: 'Save',
      edit: 'Edit',
      backtoHome: 'Back to homepage',
      exit: 'Exit',
      addNew: 'Add new',
      choosePeriod: 'Choose the period',
    };
  } else {
    return {
      ok: 'OK',
      completed: 'Выполнено',
      cancel: 'Отмена',
      add: 'Добавить',
      delete: 'Удалить',
      save: 'Сохранить',
      edit: 'Изменить',
      backtoHome: 'Перейти на главную',
      exit: 'Выйти',
      addNew: 'Добавить новое',
      choosePeriod: 'Выбрать период',
    };
  }
}
