const loginImage = require('../../assets/images/login-image.jpg');
import { SigninForm } from '../../components/form/SigninForm';
import { login } from '../../helpers/api';
import { setToken, setUserID, setUserSettings } from '../../helpers/authentication';
import { setCarDataFromDB } from '../../helpers/localStorage';
import { IUser } from '../../types';

export class LoginPage {
  parent: HTMLElement;
  navigateTo: (path: string) => void;
  private form = new SigninForm('login').element;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.createElement();
    this.addListeners();
  }

  createElement() {
    const loginSection = document.createElement('section');
    loginSection.className = 'flex flex-col md:flex-row h-screen items-center fixed top-0 left-0 right-0 bottom-0 z-50';
    loginSection.innerHTML = `
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="${loginImage}" alt="login page background" class="w-full h-full object-cover">
      </div>

      <div class="bg-white w-full md:mx-auto md:mx-0 md:w-full xl:w-1/3 lg:w-1/2 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in</h1>

          ${this.form}

          <p class="mt-8">Need an account?
            <a href="/signup" class="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a>
          </p>

        </div>
      </div>
    `;

    this.parent.append(loginSection);
  }

  addListeners() {
    const form = document.querySelector('#login-form') as HTMLFormElement;
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = document.querySelector('#login-btn') as HTMLFormElement;
      const alertEl = document.querySelector('#login-alert') as HTMLDivElement;
      submitBtn.disabled = true;

      const email = form.email as HTMLInputElement;
      const pass = form.pass as HTMLInputElement;

      const userData: IUser = {
        email: email.value,
        password: pass.value,
      };

      const res = await login(userData);
      const status = res.status;
      const data = await res.json();

      // log
      console.log('Ответ сервера:', status, data);
      setToken(data.token);
      setUserID(data.id);
      console.log('дал айди,', data.id);

      setUserSettings(data.userSettings);

      if (status === 200) {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-red-100');
        alertEl.classList.add('bg-green-100');
        alertEl.classList.remove('text-red-700');
        alertEl.textContent = `Status: ${status}. Token received.`;
        await setCarDataFromDB();
        console.log('обновил дату');
        setTimeout(() => {
          this.navigateTo('/');
        }, 4000);
      } else {
        alertEl.classList.remove('invisible');
        alertEl.classList.remove('bg-green-100');
        alertEl.classList.add('bg-red-100');
        alertEl.classList.add('text-red-700');
        alertEl.textContent = `Status: ${status}. Error: ${data.message}`;
        submitBtn.disabled = false;
      }
    });
  }
}
