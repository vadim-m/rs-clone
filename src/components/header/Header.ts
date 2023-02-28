import { IInfo } from '../../types';
import { getCarInfoFromLS } from '../../helpers/localStorage';
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
  }

  createElement() {
    const fragment = document.createElement('header');
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
  
	
    `;
    return fragment;
  }
}
