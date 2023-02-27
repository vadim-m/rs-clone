import { eventLang } from '../../lang/addEventLang';
import { buttonLang } from '../../lang/buttonLang';

export class ErrorPage {
  parent: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.className = 'error flex items-center h-full p-16 text-gray-800';
    fragment.innerHTML = `
    <div class="container flex flex-col items-center justify-center px-5 mx-auto">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl text-gray-400 dark:text-gray-100">
          <span class="sr-only">Ошибка</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl mb-6 dark:text-white">${eventLang().cantFindPage}</p>
        <a rel="noopener noreferrer" href="/" class="px-8 py-3 font-semibold rounded bg-myblue text-gray-50">${
          buttonLang().backtoHome
        }</a>
      </div>
    </div>
    `;
    this.parent.append(fragment);
  }
}
