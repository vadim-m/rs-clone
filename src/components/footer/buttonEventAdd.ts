const gasStation = require('../../assets/icons/gas-station.svg');
const reminder = require('../../assets/icons/reminders.svg');
const tool = require('../../assets/icons/tool.svg');
const other = require('../../assets/icons/other.svg');

export class TabsButton {
  public element: HTMLElement;
  private menuIsActive: boolean;

  constructor() {
    this.element = this.createElement();
    this.menuIsActive = false;
    this.element.addEventListener('click', (e) => {
      e.preventDefault;
      this.openTabs();
    });
  }

  private createElement(): HTMLElement {
    const element = document.createElement('div');
    element.classList.add('menu');
    element.classList.add('absolute');
    element.classList.add('bottom-20');
    element.classList.add('right-3');

    element.innerHTML = `
      <a href="/refuel" class="menu__item absolute right-0 bottom-15 w-14 h-14 p-2 rounded-full bg-myblue z-10 hover:bg-blue-700 focus:bg-blue-700">
        <img class="p-2" src="${gasStation}" alt="event-icon">
      </a>
      <a href="/reminder" class="menu__item absolute right-0 bottom-15 w-14 h-14 p-2 rounded-full bg-myblue z-10 hover:bg-blue-700 focus:bg-blue-700">
        <img class="p-2" src="${reminder}" alt="event-icon">
      </a>
      <a href="/service" class="menu__item absolute right-0 bottom-15 w-14 h-14 p-2 rounded-full bg-myblue z-10 hover:bg-blue-700 focus:bg-blue-700">
        <img class="p-2" src="${tool}" alt="event-icon">
      </a>
      <a href="/other" class="menu__item absolute right-0 bottom-15 w-14 h-14 p-2 rounded-full bg-myblue z-10 shadow-xl dark:bg-slate-500 hover:bg-blue-700 focus:bg-blue-700">
        <img class="p-2" src="${other}" alt="event-icon">
      </a>

      <button class="menu__button relative w-14 h-14 p-3 rounded-full bg-myblue z-20 shadow-xl dark:bg-slate-500 hover:bg-blue-700 focus:bg-blue-700">
        <span class="menu__line"></span>
      </button>

      <div class="menu__back hidden fixed z-1 left-0 top-0 h-full w-full overflow-auto bg-mydark"></div>
    `;
    return element;
  }

  openTabs() {
    const menuItems = document.querySelectorAll('.menu__item') as NodeListOf<HTMLElement>;
    const menuBack = document.querySelector('.menu__back') as HTMLElement;
    const menuBtn = document.querySelector('.menu__button') as HTMLElement;
    const itemsCount = menuItems.length;
    this.menuIsActive = !this.menuIsActive;

    if (this.menuIsActive) {
      menuBack.classList.remove('hidden');
      menuBtn.classList.add('menu_active');

      let bottomStyle = 110;
      const transitiomDuration = 0.18;

      for (let i = 0; i < itemsCount; i++) {
        menuItems[i].style.bottom = bottomStyle + '%';
        menuItems[i].style.transitionDelay = `${transitiomDuration * (i+ 1)}s`;
        bottomStyle = bottomStyle + 110;
      }
    } else {
      for (let i = 0; i < itemsCount; i++) {
        menuBack.classList.add('hidden');
        menuBtn.classList.remove('menu_active');
        menuItems[i].removeAttribute('style');
      }
    }
  }
}
