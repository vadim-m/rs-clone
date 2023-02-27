import { getCurrentLanguage } from '../utilits/getCurrentSettings';

export function buttonLang() {
  if (getCurrentLanguage() === 'EN') {
    return {
      ok: 'OK',
      completed: 'COMPLETED',
      cancel: 'CANCEL',
      add: 'ADD',
      delete: 'DELETE',
      save: 'SAVE',
      edit: 'EDIT',
      option: '...',
      backtoHome: 'Back to homepage',
      exit: 'Exit',
    };
  } else {
    return {
      ok: 'OK',
      completed: 'ВЫПОЛНЕНО',
      cancel: 'ОТМЕНА',
      add: 'ДОБАВИТЬ',
      delete: 'УДАЛИТЬ',
      save: 'СОХРАНИТЬ',
      edit: 'ИЗМЕНИТЬ',
      option: '...',
      backtoHome: 'Перейти на главную',
      exit: 'Выйти',
    };
  }
}
