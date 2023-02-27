import { setLogo } from '../../helpers/utils';
import { IInfo } from '../../types';
import { getCarInfoFromLS } from '../../helpers/localStorage';
import { getAppSettingsFromLS } from '../../helpers/localStorage';
import { eventLang } from '../../lang/addEventLang';
import { buttonLang } from '../../lang/buttonLang';

export class Header {
  private car: IInfo | null;

  constructor() {
    this.car = getCarInfoFromLS();
    this.render();
  }

  render() {
    const body = document.querySelector('body') as HTMLElement;
    body.prepend(this.createElement());
    this.addEvents();
  }

  createElement() {
    const settings = getAppSettingsFromLS();

    const fragment = document.createElement('header');
    const carImg = require(`../../assets/icons/brands/${setLogo(String(this.car?.brand))}.svg`);
    fragment.classList.add('container');
    fragment.classList.add('mx-auto');
    fragment.innerHTML = `
    <nav class="header relative py-4 flex justify-between items-center bg-white dark:bg-slate-900">
		  <a class="header__logo text-3xl font-bold leading-none" href="/">
          <svg class="header__icon w-10 h-10 dark:fill-white" version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
           stroke="none">
          <path d="M2320 5110 c-223 -22 -483 -84 -693 -166 -209 -82 -516 -255 -543
          -306 -23 -44 -18 -86 15 -119 47 -47 75 -40 230 53 222 133 410 213 645 273
          219 56 332 69 586 69 253 0 367 -13 585 -69 410 -105 775 -314 1080 -620 189
          -188 326 -378 445 -614 112 -221 188 -462 226 -716 25 -165 26 -504 1 -665
          -121 -781 -591 -1433 -1287 -1781 -221 -111 -463 -187 -715 -225 -165 -25
          -504 -26 -665 -1 -427 66 -807 231 -1145 497 -182 144 -404 395 -535 605 -159
          256 -277 579 -326 895 -25 161 -25 519 0 680 51 329 167 641 341 920 76 122
          82 155 36 201 -33 33 -75 38 -119 15 -50 -26 -222 -331 -305 -541 -305 -773
          -208 -1668 255 -2357 619 -922 1754 -1341 2823 -1041 929 260 1646 1043 1819
          1987 156 845 -103 1682 -705 2285 -398 398 -880 639 -1449 726 -126 19 -466
          27 -600 15z"/>
          <path d="M2310 4605 c-1007 -127 -1769 -960 -1807 -1975 -21 -572 201 -1127
          611 -1534 627 -619 1575 -771 2361 -379 873 436 1319 1411 1079 2358 -111 439
          -389 853 -758 1129 -276 207 -571 333 -916 391 -135 23 -427 28 -570 10z m482
          -201 c311 -40 587 -148 848 -332 123 -86 346 -309 430 -429 66 -94 183 -294
          176 -301 -2 -2 -98 13 -213 32 -566 96 -1056 133 -1623 123 -504 -10 -912 -49
          -1375 -132 -77 -14 -146 -25 -153 -25 -16 0 57 139 131 250 200 298 495 542
          818 679 180 76 335 116 564 144 79 10 286 5 397 -9z m428 -1129 c171 -14 365
          -35 483 -51 46 -7 49 -9 76 -63 43 -84 88 -220 112 -334 24 -112 31 -337 16
          -457 l-9 -65 -118 -58 c-147 -72 -265 -155 -388 -272 -199 -189 -318 -368
          -413 -620 l-37 -100 -65 -17 c-192 -49 -442 -49 -634 0 l-65 17 -37 100 c-92
          242 -216 431 -402 610 -147 141 -280 232 -445 307 l-73 33 -8 65 c-15 125 -8
          347 16 457 24 115 69 250 112 334 27 54 30 56 76 63 119 17 413 46 563 56 91
          6 188 12 215 14 130 9 854 -4 1025 -19z m-2116 -157 c-70 -179 -98 -340 -99
          -563 l0 -180 -105 17 c-58 10 -127 21 -154 24 l-49 6 6 176 c6 179 28 336 64
          457 l19 59 159 32 c88 18 165 33 172 33 7 1 3 -21 -13 -61z m3096 23 l134 -26
          19 -60 c34 -113 58 -286 64 -462 l6 -171 -49 -6 c-27 -3 -96 -14 -154 -24
          l-105 -17 0 180 c-1 224 -29 384 -99 563 l-25 63 37 -7 c20 -4 98 -19 172 -33z
          m-3301 -951 c284 -58 513 -182 721 -390 253 -252 393 -561 416 -914 l7 -109
          -29 7 c-16 4 -81 27 -144 51 -331 128 -650 387 -857 695 -126 188 -223 414
          -272 638 l-9 42 35 0 c19 0 79 -9 132 -20z m3475 -42 c-117 -509 -450 -951
          -916 -1216 -91 -51 -330 -152 -362 -152 -20 0 -21 62 -5 190 47 384 249 730
          562 966 105 79 293 177 409 214 90 29 233 58 285 59 l41 1 -14 -62z m-2019
          -1133 c140 -19 270 -19 410 0 61 8 115 15 121 15 7 0 8 -19 3 -57 -4 -32 -8
          -100 -8 -150 -1 -107 11 -97 -136 -113 -115 -13 -255 -13 -370 0 -147 16 -135
          6 -136 113 0 50 -4 118 -8 150 -5 38 -4 57 3 57 6 0 61 -7 121 -15z"/>
          <path d="M2443 3046 c-219 -53 -383 -261 -383 -486 0 -270 230 -500 500 -500
          270 0 500 230 500 500 0 274 -233 503 -508 499 -31 0 -80 -6 -109 -13z m251
          -220 c105 -51 161 -144 161 -266 0 -85 -21 -142 -74 -203 -82 -92 -237 -121
          -353 -64 -160 79 -215 278 -118 430 80 126 246 170 384 103z"/>
          <path d="M754 4366 c-37 -37 -43 -70 -20 -115 15 -28 53 -51 86 -51 51 0 100
          49 100 99 0 34 -23 72 -51 87 -45 23 -78 17 -115 -20z"/>
          </g>
        </svg>
		  </a>
		<div class="header__burger lg:hidden">
			<button class="navbar-burger flex items-center text-myblue p-3" id="nav-burger">
				<svg class="block h-8 w-8 fill-current dark:fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a class="text-sm text-myblue font-bold dark:text-white" href="#">${eventLang().aboutUs}</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="/settings">${eventLang().settings}</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="/todo">${eventLang().notes}</a></li>

		</ul>
		<a class="hidden lg:inline-block py-2 px-6 bg-myblue hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">${
      buttonLang().exit
    }</a>
	</nav>
  <div class="navbar__backdrop fixed inset-0 bg-gray-800 opacity-25 z-10 dark:bg-slate-400 hidden"></div>
	<div class="navbar__menu absolute top-0 right-0 p-4 space-y-2 w-64 h-full bg-gray-50 text-gray-800 border z-40 dark:bg-slate-800 dark:text-gray-50 hidden" id="nav-bar">
		
    <div class="flex items-center py-2 space-x-4 mb-8">
      <h2 class="text-lg font-semibold">${settings?.fullName}</h2>
  </div>
  <div>
    <div class="text-sm">${eventLang().myCar}</div>
    <div class="info__car car flex items-center bg-slate rounded-lg shadow-md mb-6 px-3 py-2 dark:bg-slate-400">
      <img src="${carImg}" alt="car-image" class="car__image w-10 mr-6">
      <div>
      <h3 class="car__name font-bold text-xxs text-center">${this.car?.brand} ${this.car?.model}</h3>
      <p class="car__year text-xxs text-center">${this.car?.year}</p>
      </div>
    </div>
  </div>
    <ul class="pt-2 pb-4 space-y-1 text-sm">
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md">
        <svg width="20px" height="20px" viewBox="0 0 24 24" class="w-5 h-5 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6b7280" stroke-width="2"/>
          <path d="M12 8L12 13" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 16V15.9888" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>
        </svg>
          <span>${eventLang().aboutUs}</span>
        </a>
      </li>
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="/todo" class="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
          </svg>
          <span>${eventLang().notes}</span>
        </a>
      </li>
      <li class="hover:bg-gray-100">
        <a rel="noopener noreferrer" href="/settings" class="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
            <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
          </svg>
          <span>${eventLang().settings}</span>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" href="#" class="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current text-gray-600">
            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
            <rect width="32" height="64" x="256" y="232"></rect>
          </svg>
          <span>Выйти</span>
        </a>
      </li>
    </ul>
    <button class="navbar__close">
      <svg class="absolute top-2 right-1 h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
  </button>
	</div> 

    `;
    return fragment;
  }

  addEvents() {
    const burger = document.querySelector('#nav-burger');
    const navBar = document.querySelector('#nav-bar');
    const closeButton = document.querySelector('.navbar__close');
    const navBackdrop = document.querySelector('.navbar__backdrop');
    burger?.addEventListener('click', () => {
      navBar?.classList.remove('hidden');
      navBackdrop?.classList.remove('hidden');
    });
    closeButton?.addEventListener('click', () => {
      navBar?.classList.add('hidden');
      navBackdrop?.classList.add('hidden');
    });
  }
}
