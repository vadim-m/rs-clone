export function buttonLang() {
  if (localStorage.getItem('langMyCar') === 'EN') {
    return {
      ok: 'OK',
      cencel: 'CENCEL',
      add: 'ADD',
      delete: 'DELETE',
      edit: 'EDIT',
      option: '...',
    };
  } else {
    return {
      ok: 'OK',
      cencel: 'ОТМЕНА',
      add: 'ДОБАВИТЬ',
      delete: 'УДАЛИТЬ',
      edit: 'РЕДАКТИРОВАТЬ',
      option: '...',
    };
  }
}
