import { setCarDataFromDB } from '../helpers/localStorage';

export async function addToBack(res: Response, navigateTo: (path: string) => void, buttonCall: HTMLButtonElement) {
  const status = res.status;

  if (status === 200 || status === 201) {
    // получаем и устанавливаем свежие данные в LS
    await setCarDataFromDB();
    // спрятали спиннер
    document.querySelector('.spinner')?.classList.add('hidden');
    // переадресация на главную

    setTimeout(() => {
      navigateTo('/');
    }, 100);
  } else {
    // ЕСЛИ сервер ответил с ошибкой
    buttonCall.disabled = false;
    document.querySelector('.spinner')?.classList.add('hidden');
  }
}
