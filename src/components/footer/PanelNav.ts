import { TabsButton } from './buttonEventAdd';
import { eventLang } from '../../lang/addEventLang';

export class PanelNav {
  private tabsButton = new TabsButton().element;

  constructor() {
    this.render();
  }

  render() {
    const mainContainer = document.querySelector('.main') as HTMLElement;
    mainContainer.after(this.createElement());
  }

  createElement() {
    const element = document.createElement('footer');
    element.className = 'footer fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-800';

    element.innerHTML = `
      <nav class="nav relative shadow-top px-5 py-3 flex justify-center">
        <ul class="footer__nav nav__list flex flex-row justify-between text-xs container">
          <li class="nav__item">
            <a href="/" class="nav__link flex flex-col items-center">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000" class="nav__icon w-6 h-6 fill-black dark:fill-white"
              preserveAspectRatio="xMidYMid meet">
            
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M2397 5096 c-32 -13 -75 -36 -95 -50 -21 -14 -526 -515 -1124 -1113
                -876 -878 -1091 -1098 -1112 -1140 -96 -194 -64 -406 83 -554 92 -91 209 -139
                343 -139 l68 0 0 -800 c0 -541 4 -816 11 -852 38 -182 185 -347 367 -410 66
                -23 71 -23 554 -23 476 0 487 0 514 21 15 11 37 33 48 48 21 27 21 40 26 695
                l5 668 30 49 c38 61 115 110 189 119 28 4 168 5 311 3 l260 -3 53 -29 c50 -28
                82 -61 113 -116 11 -21 15 -144 19 -692 5 -654 5 -667 26 -694 11 -15 33 -37
                48 -48 27 -21 38 -21 514 -21 483 0 488 0 554 23 182 63 329 228 367 410 7 36
                11 311 11 852 l0 800 68 0 c188 0 352 100 433 265 34 69 34 71 34 205 0 228
                115 93 -1169 1376 -1276 1277 -1148 1167 -1366 1172 -113 2 -130 0 -183 -22z
                m247 -286 c59 -28 2149 -2121 2171 -2172 21 -51 19 -94 -6 -144 -37 -77 -68
                -88 -261 -94 -181 -5 -194 -9 -242 -74 -21 -27 -21 -38 -26 -934 l-5 -907 -28
                -47 c-15 -26 -42 -59 -60 -72 -70 -54 -91 -56 -473 -56 l-354 0 0 560 c0 367
                -4 577 -11 612 -39 188 -190 350 -384 411 -66 21 -88 22 -395 22 -358 0 -376
                -2 -504 -67 -127 -64 -245 -222 -275 -366 -7 -35 -11 -245 -11 -612 l0 -560
                -354 0 c-382 0 -403 2 -473 56 -18 13 -45 46 -60 72 l-28 47 -5 907 c-5 896
                -5 907 -26 934 -48 65 -61 69 -242 74 -193 6 -224 17 -261 94 -25 50 -27 93
                -6 144 21 50 2112 2143 2170 2172 51 25 98 25 149 0z"/>
                </g>
              </svg>
              <span class="nav__name" id="footer-main">${eventLang().main}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/events" class="nav__link flex flex-col items-center">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              class="nav__icon w-6 h-6 fill-black dark:fill-white" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
            
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M1273 4949 c-202 -35 -353 -218 -353 -429 l0 -67 -118 -6 c-127 -7
                -176 -18 -263 -61 -117 -58 -217 -175 -262 -306 l-22 -65 -3 -1670 c-2 -1116
                1 -1693 8 -1740 22 -152 135 -312 268 -383 124 -66 -11 -62 2028 -62 2012 0
                1891 -3 2013 56 74 36 189 151 225 225 59 122 56 15 56 1859 0 1484 -2 1702
                -15 1753 -46 176 -186 318 -365 371 -30 9 -106 19 -167 23 l-113 6 0 47 c0
                282 -232 492 -495 450 -214 -34 -365 -213 -365 -431 l0 -69 -775 0 -775 0 0
                49 c0 111 -40 227 -105 307 -89 109 -256 169 -402 143z m167 -258 c19 -10 49
                -37 65 -60 30 -42 30 -44 33 -200 4 -174 -4 -223 -45 -271 -87 -104 -254 -87
                -312 32 -19 40 -21 61 -21 209 0 138 3 170 19 204 47 103 158 139 261 86z
                m2413 1 c18 -10 45 -37 62 -61 30 -42 30 -44 33 -200 4 -174 -4 -223 -45 -271
                -88 -105 -254 -87 -312 34 -21 42 -22 57 -19 225 l3 179 31 39 c45 56 107 86
                167 79 27 -3 63 -14 80 -24z m-2909 -554 c65 -185 232 -296 430 -286 103 5
                192 44 271 119 56 53 109 143 121 205 l6 34 780 -2 780 -3 19 -59 c74 -239
                356 -364 582 -258 118 55 209 160 237 275 l12 47 68 0 c177 0 280 -54 336
                -174 24 -51 24 -53 24 -413 l0 -363 -2061 0 -2060 0 3 363 c3 343 4 364 24
                407 28 61 67 105 119 136 55 32 110 43 208 41 l78 -2 23 -67z m3664 -2330 c-3
                -1161 -4 -1215 -22 -1248 -26 -49 -84 -108 -131 -133 l-40 -22 -1850 -3 -1850
                -2 -62 30 c-65 32 -110 79 -141 147 -16 35 -17 124 -20 1241 l-2 1202 2060 0
                2060 0 -2 -1212z"/>
                <path d="M2493 2440 c-27 -16 -52 -58 -134 -222 -56 -112 -102 -204 -103 -205
                0 -1 -100 -15 -221 -33 -121 -17 -233 -36 -249 -42 -37 -15 -66 -63 -66 -113
                -1 -39 5 -45 173 -210 l173 -170 -39 -226 c-38 -218 -39 -227 -23 -261 23 -47
                71 -73 122 -65 21 3 127 51 234 106 l195 100 202 -104 c236 -122 262 -128 319
                -71 44 44 44 64 -1 321 l-35 200 170 165 c143 139 170 171 176 201 8 51 -25
                111 -72 130 -12 4 -120 22 -240 39 -121 18 -219 32 -220 33 -1 1 -48 94 -105
                206 -110 216 -130 241 -194 241 -16 0 -45 -9 -62 -20z m213 -637 c21 -14 225
                -52 284 -53 8 0 -31 -46 -87 -102 -70 -70 -104 -113 -108 -133 -4 -16 3 -81
                14 -144 12 -63 21 -120 21 -128 0 -8 -43 9 -120 47 -79 39 -132 60 -155 60
                -23 0 -76 -21 -155 -60 -66 -33 -121 -60 -123 -60 -2 0 6 59 18 132 16 94 20
                141 13 164 -6 22 -39 62 -105 123 -53 50 -95 93 -92 95 2 2 58 12 124 21 176
                25 174 24 252 179 l65 131 64 -127 c41 -81 73 -134 90 -145z"/>
                </g>
              </svg>
              <span class="nav__name" id="footer-events">${eventLang().events}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/plans" class="nav__link flex flex-col items-center">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              class="nav__icon w-6 h-6 fill-black dark:fill-white" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
            
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594
                -662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31
                -565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220
                412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45
                498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132
                296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180
                476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193
                -740 235 -147 23 -475 34 -615 20z m70 -1449 c0 -761 3 -1139 10 -1158 6 -16
                363 -380 813 -830 488 -489 798 -806 792 -811 -235 -209 -609 -401 -932 -478
                -192 -45 -295 -57 -523 -58 -243 -1 -345 12 -570 70 -776 202 -1392 818 -1594
                1594 -56 216 -70 328 -70 560 -1 279 25 451 105 696 219 673 742 1203 1414
                1434 145 49 412 105 523 109 l32 1 0 -1129z m468 1114 c676 -94 1273 -494
                1623 -1086 148 -251 246 -537 291 -844 18 -128 15 -462 -5 -597 -38 -247 -99
                -443 -207 -663 -83 -172 -207 -362 -312 -480 -5 -6 -307 289 -773 755 l-765
                765 0 1082 c0 1070 0 1083 20 1083 10 0 68 -7 128 -15z"/>
                </g>
              </svg>
              <span class="nav__name" id="footer-plans">${eventLang().plans}</span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/statistic" class="nav__link flex flex-col items-center">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              class="nav__icon w-6 h-6 fill-black dark:fill-white" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet">
            
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M1184 5000 c-50 -15 -125 -71 -161 -118 -42 -55 -63 -128 -63 -218
                l0 -72 -207 -4 c-175 -5 -218 -9 -274 -27 -172 -55 -308 -200 -354 -377 -23
                -87 -23 -3160 0 -3247 46 -177 180 -320 354 -380 l66 -22 1194 -3 1195 -3 90
                -87 c229 -221 502 -332 815 -332 312 0 585 110 810 324 234 224 361 521 361
                847 0 313 -111 586 -332 815 l-87 90 -3 980 c-3 917 -4 982 -22 1034 -60 182
                -188 309 -366 365 -42 14 -104 19 -261 22 l-207 5 -4 97 c-3 79 -9 105 -31
                147 -119 233 -453 232 -568 -1 -26 -53 -32 -80 -37 -155 l-5 -90 -742 0 -743
                0 -4 93 c-3 76 -9 103 -31 149 -31 62 -84 116 -149 149 -48 25 -180 36 -234
                19z m147 -216 c53 -27 59 -59 59 -304 0 -168 -3 -229 -14 -255 -15 -35 -59
                -65 -96 -65 -37 0 -81 30 -96 65 -18 44 -20 454 -3 504 13 36 61 71 97 71 13
                0 37 -7 53 -16z m2158 -18 l26 -26 0 -259 0 -259 -24 -26 c-48 -51 -142 -40
                -170 20 -15 33 -15 494 0 527 27 60 118 73 168 23z m-2527 -489 c5 -110 34
                -183 98 -241 73 -66 114 -81 220 -81 106 0 147 15 220 81 64 58 93 131 98 241
                l4 93 743 0 742 0 5 -89 c7 -109 36 -181 103 -245 65 -63 138 -89 235 -84 120
                7 213 67 268 173 21 41 27 67 30 148 l4 97 188 0 c149 0 199 -4 240 -17 65
                -21 142 -89 178 -157 26 -50 27 -55 30 -258 l3 -208 -2025 0 -2026 0 0 183 c0
                207 10 259 63 329 36 48 112 103 161 117 17 5 117 10 222 10 l192 1 4 -93z
                m3408 -1353 c0 -473 -3 -595 -12 -591 -197 86 -285 108 -473 114 -169 6 -275
                -8 -410 -53 -105 -35 -254 -112 -335 -173 -84 -63 -214 -199 -269 -280 -65
                -95 -137 -253 -166 -366 -33 -123 -44 -336 -25 -466 12 -89 60 -249 91 -311
                11 -21 19 -40 19 -43 0 -3 -505 -4 -1122 -3 l-1123 3 -43 23 c-66 35 -119 88
                -149 150 l-28 57 -3 1268 -2 1267 2025 0 2025 0 0 -596z m-299 -713 c300 -78
                547 -293 658 -572 53 -132 65 -199 65 -359 0 -160 -12 -227 -65 -359 -47 -117
                -114 -217 -213 -317 -134 -133 -280 -215 -462 -261 -105 -26 -334 -24 -441 4
                -352 93 -609 348 -705 702 -28 102 -31 342 -5 445 96 381 389 659 770 732 100
                19 299 12 398 -15z"/>
                <path d="M912 3295 c-62 -19 -106 -57 -136 -117 -24 -49 -26 -61 -26 -192 0
                -159 11 -196 71 -253 57 -54 92 -63 247 -63 129 0 142 2 190 26 98 49 132 124
                132 289 0 133 -19 196 -74 251 -56 56 -118 74 -255 73 -58 0 -125 -6 -149 -14z
                m256 -307 l-3 -103 -100 0 -100 0 -3 89 c-2 49 -1 95 2 103 4 10 32 13 106 13
                l101 0 -3 -102z"/>
                <path d="M1785 3301 c-79 -20 -152 -88 -173 -160 -7 -21 -12 -94 -12 -162 0
                -109 3 -130 24 -174 25 -54 71 -100 123 -122 22 -9 78 -13 173 -13 95 0 151 4
                173 13 52 22 98 68 123 122 21 44 24 65 24 174 0 143 -10 186 -58 241 -59 69
                -98 83 -242 86 -69 2 -138 0 -155 -5z m240 -316 l0 -100 -105 0 -105 0 -3 89
                c-2 49 0 96 2 103 4 11 29 13 108 11 l103 -3 0 -100z"/>
                <path d="M2610 3290 c-114 -39 -160 -127 -160 -305 0 -165 34 -240 132 -289
                48 -24 61 -26 190 -26 155 0 190 9 247 63 60 57 71 94 71 253 0 131 -2 143
                -26 192 -49 99 -123 132 -293 132 -77 -1 -121 -6 -161 -20z m265 -305 l0 -100
                -100 0 -100 0 -3 103 -3 103 103 -3 103 -3 0 -100z"/>
                <path d="M3472 3295 c-62 -19 -106 -57 -136 -117 -24 -49 -26 -61 -26 -192 0
                -159 11 -196 71 -253 57 -54 92 -63 247 -63 129 0 142 2 190 26 98 49 132 124
                132 289 0 133 -19 196 -74 251 -56 56 -118 74 -255 73 -58 0 -125 -6 -149 -14z
                m256 -307 l-3 -103 -100 0 -100 0 -3 89 c-2 49 -1 95 2 103 4 10 32 13 106 13
                l101 0 -3 -102z"/>
                <path d="M885 2431 c-22 -10 -54 -34 -72 -52 -54 -57 -63 -92 -63 -247 0 -129
                2 -141 26 -191 49 -98 125 -131 298 -131 123 0 189 20 242 74 55 55 74 118 74
                251 0 166 -37 246 -134 291 -46 22 -64 24 -191 24 -115 0 -147 -4 -180 -19z
                m283 -299 l3 -103 -103 3 -103 3 -3 89 c-2 49 0 96 2 103 4 11 28 13 103 11
                l98 -3 3 -103z"/>
                <path d="M1745 2436 c-51 -22 -97 -68 -121 -121 -21 -44 -24 -65 -24 -174 0
                -143 10 -186 58 -241 63 -74 96 -85 262 -85 166 0 199 11 262 85 48 55 58 98
                58 241 0 109 -3 130 -24 174 -25 54 -71 100 -123 122 -44 18 -306 18 -348 -1z
                m280 -301 l0 -100 -105 0 -105 0 -3 89 c-2 49 0 96 2 103 4 11 29 13 108 11
                l103 -3 0 -100z"/>
                <path d="M885 1576 c-54 -25 -100 -71 -122 -123 -18 -45 -18 -301 0 -346 22
                -52 68 -98 122 -123 44 -21 65 -24 174 -24 143 0 186 10 241 58 74 63 85 96
                85 262 0 166 -11 199 -85 262 -55 48 -98 58 -241 58 -109 0 -130 -3 -174 -24z
                m280 -296 l0 -105 -100 0 -100 0 -3 94 c-1 52 0 101 2 108 4 11 28 13 103 11
                l98 -3 0 -105z"/>
                <path d="M1759 1587 c-57 -21 -97 -54 -126 -105 -27 -46 -28 -51 -28 -203 l0
                -156 30 -49 c19 -30 49 -60 79 -79 l49 -30 157 0 157 0 49 30 c30 19 60 49 79
                79 l30 49 0 157 0 157 -30 49 c-19 30 -49 60 -79 79 -48 29 -53 30 -190 33
                -99 1 -152 -2 -177 -11z m259 -209 c7 -7 12 -44 12 -98 0 -54 -5 -91 -12 -98
                -16 -16 -180 -16 -196 0 -7 7 -12 44 -12 98 0 54 5 91 12 98 7 7 44 12 98 12
                54 0 91 -5 98 -12z"/>
                <path d="M3793 2014 c-61 -30 -63 -46 -63 -414 0 -370 2 -385 65 -414 28 -14
                83 -16 365 -16 370 0 385 2 414 65 20 41 20 49 0 90 -29 61 -50 65 -353 65
                l-271 0 0 271 c0 303 -4 324 -65 353 -41 20 -52 20 -92 0z"/>
                </g>
              </svg>
              <span class="nav__name" id="footer-stat">${eventLang().statistic}</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
    element.append(this.tabsButton);
    return element;
  }
}
