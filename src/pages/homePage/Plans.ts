const carRepair = require('../../assets/icons/car-repair.png');
const gear = require('../../assets/icons/gear.png');

export class Plans {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `       
    <h2 class="plans__title font-medium text-sm mb-2">Ближайшие планы</h2>
    <ul class="plans__list grid gap-y-3 mb-4 dark:text-black">
      <li class="plans__item relative bg-myslate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 shadow-md">
        <div class="plans__bar absolute bottom-12 right-0 bg-myblue text-white text-xs px-3 py-1 rounded-md">Через 10 дней</div>
        <div class="plans__item-and-icon flex items-center mr-2">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          class="plans__image w-7 h-7 mr-4 fill-black" viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            stroke="none">
            <path d="M471 4944 c-143 -38 -222 -112 -339 -316 -114 -199 -126 -231 -126
            -348 -1 -166 21 -204 312 -531 l210 -236 -170 -294 c-231 -400 -254 -443 -274
            -524 -43 -171 39 -366 196 -469 161 -106 1730 -1003 1790 -1023 73 -25 165
            -30 238 -11 68 16 2320 1033 2350 1060 28 26 52 77 52 110 0 12 -9 41 -21 64
            -36 74 -23 72 -864 190 -418 59 -761 108 -763 110 -2 1 -41 143 -87 315 -90
            334 -118 407 -186 477 -54 56 -82 74 -374 242 -137 79 -254 147 -259 151 -8 7
            130 259 142 259 4 0 99 -53 211 -117 187 -108 209 -118 255 -118 62 0 105 27
            131 81 21 45 16 111 -13 151 -30 42 -1093 654 -1148 660 -99 12 -186 -95 -155
            -190 17 -51 50 -77 251 -192 102 -59 189 -111 194 -116 8 -7 -108 -224 -134
            -253 -5 -4 -149 73 -322 173 l-313 181 -155 176 c-241 273 -281 306 -407 339
            -71 19 -151 18 -222 -1z m168 -295 c21 -7 80 -65 181 -179 83 -93 150 -173
            150 -179 0 -7 -64 -122 -142 -258 l-142 -246 -44 49 c-25 27 -109 122 -188
            212 -191 218 -190 209 -63 429 72 124 92 150 134 169 37 16 72 17 114 3z
            m1247 -930 c362 -209 669 -389 681 -401 31 -29 33 -36 138 -428 52 -195 103
            -366 113 -379 46 -62 36 -60 637 -145 558 -79 565 -80 533 -97 -77 -39 -1105
            -499 -1115 -499 -9 0 -2239 1283 -2251 1295 -5 5 589 1035 598 1035 3 0 303
            -171 666 -381z m-378 -1514 c562 -324 1018 -592 1014 -596 -4 -3 -70 -34 -147
            -69 -118 -52 -146 -61 -182 -57 -32 3 -235 116 -895 497 -469 271 -865 504
            -880 518 -34 31 -52 84 -44 124 9 45 86 180 101 176 7 -2 472 -268 1033 -593z"/>
            <path d="M4451 1938 c-43 -21 -47 -27 -136 -212 -359 -745 -395 -833 -395
            -966 0 -324 276 -600 600 -600 324 0 600 276 600 600 0 133 -36 221 -395 966
            -90 186 -93 191 -137 212 -56 28 -82 28 -137 0z m149 -645 c229 -487 214 -451
            214 -533 1 -91 -22 -148 -84 -210 -61 -61 -119 -85 -210 -85 -91 0 -149 24
            -210 85 -62 62 -85 119 -84 210 0 72 3 82 70 225 171 365 219 465 224 465 3 0
            39 -71 80 -157z"/>
            </g>
          </svg>
          <div class="plans__text">
            <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена масла</h3>
            <span class="plans__addition text-xs leading-3 inline-block">Масло моторное SHELL HELIX HX8 SW-40 4л.
            </span>
          </div>
        </div>
        <div class="plans__date text-xs font-bold text-center pr-1">25 дек. 2022 г.</div>
      </li>
      <li class="plans__item bg-myslate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex">
          <img src="${carRepair}" class="plans__image w-7 h-7 mr-4" alt="repair-icon">
          <h3 class="plans__title text-sm font-bold mb-1 leading-3">Диагностика подвески</h3>
        </div>
        <button class="plans__button button text-sm bg-myblue text-white px-3 py-1 rounded-md">Добавить</button>
      </li>
      <li class="plans__item bg-myslate rounded-lg flex justify-between gap-x-2 items-center py-2 pl-4 pr-2 shadow-md">
        <div class="plans__item-and-icon flex">
          <img src="${gear}" class="plans__image w-7 h-7 mr-4" alt="gear-icon">
          <h3 class="plans__title text-sm font-bold mb-1 leading-3">Замена фильтров</h3>
        </div>
        <button class="plans__button button text-sm bg-myblue text-white px-3 py-1 rounded-md">Добавить</button>
      </li>
    </ul>
    `;

    return fragment.content;
  }
}
