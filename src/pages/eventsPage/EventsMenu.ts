export class EventsMenu {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="events__menus grid grid-cols-1 gap-2 justify-between sm:grid-cols-2 mb-4">
    <div class="events__drop-down-menu drop-down relative inline-block text-left">
        <button type="button" class="drop-down__button inline-flex w-full justify-center items-center rounded-md border border-slateBorders bg-myslate px-4 py-2 text-xs font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-myblue focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-slate-700 dark:text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <span class="drop-down__title">Тип События</span> 
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
    </div>
    <div class="events__drop-down-menu drop-down relative inline-block text-left">
        <button type="button" class="drop-down__button inline-flex w-full justify-center items-center rounded-md border border-slateBorders bg-myslate px-4 py-2 text-xs font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-myblue focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-slate-700 dark:text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <span class="drop-down__title">Сначала новые</span> 
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
    </div>
  </div>
    `;
  }
}
