const gear = require('../../assets/icons/gear.png');
const car = require('../../assets/images/chevrolet.png');
const downArror = require('../../assets/icons/down-arrow.png');

export class Header {
  constructor() {
    this.render();
  }

  render() {
    const body = document.querySelector('body') as HTMLElement;
    body.prepend(this.createElement());
  }

  createElement() {
    const fragment = document.createElement('header');
    fragment.innerHTML = `
      <div class="header__headerle pt-5 pb-5 flex justify-between container mx-auto >
        <h1 class="header__title font-bold text-lg">Chevrolet Aveo, 2007 г.в.</h1>
        <img src="${gear}" class="header__gear w-7 h-7" alt="gear-icon">
      </div> 
     
      <div class="absolute top-0 left-0 p-2 h-full space-y-2 w-60 bg-gray-50 text-gray-800 border z-10">
        <div class="flex items-center p-2 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" class="w-12 h-12 rounded-full bg-gray-500">
          <div>
            <h2 class="text-lg font-semibold">Иван Лапшин</h2>
          </div>
        </div>
        <div>
          <div class="text-sm">Выбранный авто</div>
          <div class="info__car car flex justify-between items-center bg-slate rounded-lg shadow-md mb-2 p-2">
            <img src="${car}" alt="car-image" class="car__image w-5/12 mr-2">
            <h3 class="car__name font-bold text-xs">Chevrolet</br>Aveo, 2007 г.в.</h3>
            <img src="${downArror}" alt="down-arror" class="car__image w-4 h-4">
          </div>
        </div>
        <div class="divide-y divide-gray-300">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="bg-gray-100 text-gray-900">
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Заметки</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
                <span>Помощь и поддержка</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
                  <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                  <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                </svg>
                <span>Поделиться приложением</span>
              </a>
            </li>
          </ul>

          <div>Валюта по умолчанию</div>
          <div class="info__car car flex justify-between items-center bg-slate rounded-lg shadow-md mb-2 p-2">
            <input>
          </div>
          <main class="flex min-h-screen w-full items-center justify-center">
    
          <div x-data="select" class="relative w-[30rem]" @click.outside="open = false">
              <!-- trigger button -->
              <button type="button" @click="toggle"
                  class="flex w-full items-center justify-between rounded bg-white p-2 ring-1 ring-gray-300"
                  :class="(open) && 'ring-blue-600'">
                  <span x-text="(language == '') ? 'Choose language' : language"></span>
                  <span class="text-2xl w-5 h-5 grid place-content-center"><i class='bx bx-chevron-down'></i></span>
              </button>

              <!-- list items -->
              <ul class="z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300" x-show="open">
                  <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="setLanguage('Python')">
                      Python
                  </li>
                  <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="setLanguage('PHP')">
                      PHP
                  </li>
                  <li class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="setLanguage('C#')">
                      C#
                  </li>
              </ul>
          </div>
      </main>

          <ul class="pt-4 pb-2 space-y-1 text-sm">
            <li>
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
                  <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                  <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                </svg>
                <span>Настройки</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span>Выйти</span>
              </a>
            </li>
          </ul>
        </div>
      
    `;
    return fragment;
  }
}
