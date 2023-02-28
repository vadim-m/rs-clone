import { getCurrentLanguage } from '../utilits/getCurrentSettings';

export function buttonLang() {
  if (getCurrentLanguage() === 'English') {
    return {
      ok: 'OK',
      completed: 'COMPLETED',
      cancel: 'CANCEL',
      cancelForm: 'Cancel',
      add: 'ADD',
      delete: 'DELETE',
      save: 'SAVE',
      edit: 'EDIT',
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
      completed: 'ВЫПОЛНЕНО',
      cancel: 'ОТМЕНА',
      cancelForm: 'Отменить',
      add: 'ДОБАВИТЬ',
      delete: 'УДАЛИТЬ',
      save: 'СОХРАНИТЬ',
      edit: 'ИЗМЕНИТЬ',
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
