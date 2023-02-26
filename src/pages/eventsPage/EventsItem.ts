export class EventsItem {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
      <li class="events__item grid grid-cols-layout justify-between items-center p-2 border-b border-slateBorders">
        <div class="events__item-and-icon flex items-center mr-2">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          class="plans__image w-7 h-7 mr-4 fill-black dark:fill-white" viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            stroke="none">
            <path d="M842 4785 c-169 -53 -249 -246 -168 -402 16 -30 285 -334 716 -807
            l690 -758 0 -464 c0 -509 0 -507 59 -557 36 -30 86 -42 135 -33 51 10 725 519
            748 566 16 30 18 66 18 261 l0 227 690 758 c426 468 701 778 718 809 35 66 38
            176 6 245 -27 58 -86 117 -143 144 l-46 21 -1690 2 c-1399 1 -1697 -1 -1733
            -12z m3257 -324 c-8 -11 -315 -351 -684 -755 -368 -405 -675 -749 -682 -764
            -8 -18 -12 -98 -13 -244 l0 -218 -160 -120 -160 -120 0 337 c-1 241 -4 346
            -13 365 -7 15 -313 359 -682 764 -369 404 -676 744 -684 755 -13 19 10 19
            1539 19 1529 0 1552 0 1539 -19z"/>
            <path d="M2507 1586 c-51 -19 -62 -29 -117 -111 -155 -231 -279 -483 -302
            -614 -39 -229 120 -464 357 -526 265 -69 541 114 588 390 15 91 -2 183 -61
            321 -46 107 -197 370 -267 466 -54 73 -126 100 -198 74z m136 -597 c38 -74 71
            -152 74 -174 7 -54 -16 -105 -63 -141 -31 -24 -47 -29 -95 -29 -43 0 -65 5
            -85 21 -77 57 -90 118 -47 221 45 107 123 245 136 240 7 -2 43 -64 80 -138z"/>
            </g>
          </svg>
          <div class="events__text flex flex-col">
            <h3 class="events__title text-sm font-bold mb-1 leading-4">Замена топливного фильтра</h3>
            <span class="events__addition text-xxs leading-3 inline-block">Вместе с фильтром. Автосервис "Перекресток"
            </span>
          </div>
        </div>
        <div class="events__date-and-price">
          <div class="events__price text-xs font-bold mb-1 text-end">3 900 ₽</div>
          <div class="events__date text-xxs leading-3 text-end">20 февр. 2023г.</div>
        </div>
      </li>
    `;
  }
}
