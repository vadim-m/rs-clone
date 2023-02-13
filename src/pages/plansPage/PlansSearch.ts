export class PlansSearch {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
    <div class="plans__header pt-3 pb-3 flex justify-between">
      <h1 class="plans__title font-bold text-2xl">Планы</h1>
      <button class="plans__button button text-sm bg-blue text-white px-7 py-1 rounded-md">Добавить новое</button>
    </div>
    <label class="plans__search relative block mb-2">
      <span class="sr-only">Найти запись</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <svg class="h-5 w-5 fill-slate" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
          </path>
        </svg>
      </span>
      <input class="plans__input placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs" placeholder="Найти событие" type="text" name="search"/>
    </label>
    <div class="plans__menus grid grid-cols-1 gap-2 justify-between md:grid-cols-2 mb-8">
      <div class="plans__drop-down-menu drop-down relative inline-block text-left">
        <div>
          <button type="button" class="drop-down__button inline-flex w-full justify-center items-center rounded-md border border-slateBorders bg-slate px-4 py-2 text-xs font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <span class="drop-down__title">Тип плана</span> 
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div class="drop-down__list hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="drop-down__items drop-down__items_type py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-0">Account settings</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-1">Support</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-2">License</a>
          </div>
        </div>
      </div>
      <div class="plans__drop-down-menu drop-down relative inline-block text-left">
        <div>
          <button type="button" class="drop-down__button inline-flex w-full justify-center items-center rounded-md border border-slateBorders bg-slate px-4 py-2 text-xs font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <span class="drop-down__title">Сначала ближайшие</span> 
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div class="drop-down__list hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="drop-down__items drop-down__items_type py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-0">Account settings</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-1">Support</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="drop-item-2">License</a>
          </div>
        </div>
      </div>
    </div>
    `;
    return fragment.content;
  }
}
