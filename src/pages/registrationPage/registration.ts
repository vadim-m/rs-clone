const loginImage = require('../../assets/images/registration.webp');
import { SignupForm } from '../../components/form/SignupForm';
// import { login } from '../../helpers/api';
// import { IUser } from '../../types';

export class RegistrationPage {
  parent: HTMLElement;
  private form = new SignupForm('signup').element;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.addListeners();
  }

  createElement() {
    const registrationSection = document.createElement('section');
    registrationSection.className =
      'flex flex-col md:flex-row h-screen items-center fixed top-0 left-0 right-0 bottom-0 z-50';
    registrationSection.innerHTML = `
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="${loginImage}" alt="login page background" class="w-full h-full object-cover">
      </div>

      <div class="bg-white w-full md:mx-auto md:mx-0 md:w-full xl:w-1/3 lg:w-1/2 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Sign in</h1>

          ${this.form}

          <p class="mt-8">Already have an account? 
            <a href="/signin" class="text-blue-500 hover:text-blue-700 font-semibold">Log in</a>
          </p>

        </div>
      </div>
    `;

    this.parent.append(registrationSection);
  }

  addListeners() {
    const form = document.querySelector('#signup-form') as HTMLFormElement;
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.user as HTMLInputElement;
      const email = form.email as HTMLInputElement;
      const pass = form.pass as HTMLInputElement;
      console.log(email.value, pass.value, name.value);
      const submitBtn = document.querySelector('#signup-btn') as HTMLFormElement;
      const alertEl = document.querySelector('#signup-alert') as HTMLDivElement;
      console.log(alertEl);
      alertEl.textContent = 'Alert';
      alertEl.classList.remove('invisible');
      submitBtn.disabled = true;
      // СЮДА МОЖНО прикрутить переход на main

      // НЕ ТРОГАТЬ. НЕВАЖНО
      // const userData: IUser = {
      //   email: email.value,
      //   password: pass.value,
      // };
      // const res = await login(userData);
      // const status = await res.status;
      // const data = await res.json();
      // console.log(status, data);

      // if (status === 200) {
      //   alert(`Status: ${status}.Верный логин и пароль. Токен получен.`);
      //   // ЭТО КОСТЫЛЬ с перезагрузкой страницы
      //   location.href = '/';
      // } else {
      //   alert(`Status: ${status}.\nError: ${data.message}`);
      // }
    });
  }
}
