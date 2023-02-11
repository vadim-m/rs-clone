export function buttonLang() {
  if (localStorage.getItem('langMyCar') === 'EN') {
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
