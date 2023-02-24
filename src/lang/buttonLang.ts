import { getCurrentLanguage } from '../utilits/getCurrentSettings';

export function buttonLang() {
  if (getCurrentLanguage() === 'EN') {
    return {
      ok: 'OK',
      cancel: 'CANCEL',
      add: 'ADD',
      delete: 'DELETE',
      edit: 'EDIT',
      option: '...',
    };
  } else {
    return {
      ok: 'OK',
      cancel: 'ОТМЕНА',
      add: 'ДОБАВИТЬ',
      delete: 'УДАЛИТЬ',
      edit: 'ИЗМЕНИТЬ',
      option: '...',
    };
  }
}
