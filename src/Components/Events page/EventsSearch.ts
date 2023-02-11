export class EventsSearch {
  public element: HTMLElement;

  constructor() {
    this.element = this.createElement();
    this.element.onchange = this.onChange.bind(this);
  }

  private createElement(): HTMLElement {
    const element = document.createElement('label');
    element.classList.add('events__search');
    element.classList.add('relative');
    element.classList.add('block');
    element.classList.add('mb-2');

    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <span class="sr-only">Найти событие</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <svg class="h-5 w-5 fill-slate" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
          </path>
        </svg>
      </span>
      <input class="events__input placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xs" placeholder="Найти событие" type="text" name="search" data-action="input">
    `;

    element.append(fragment.content);

    return element;
  }

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    const action = element.dataset.action;
    console.log(event);
    if (action) {
      console.log(element.value);
    }
  }
}

new EventsSearch();
