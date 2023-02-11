export class ButtonAddNew {
  public element: HTMLElement;

  constructor() {
    this.element = this.createElement();
    this.element.addEventListener('click', (e) => {
      e.preventDefault;
    });
  }

  private createElement(): HTMLElement {
    const element = document.createElement('button');
    element.classList.add('events__button');
    element.classList.add('button');
    element.classList.add('text-xs');
    element.classList.add('bg-blue');
    element.classList.add('text-white');
    element.classList.add('px-7');
    element.classList.add('py-1');
    element.classList.add('rounded-md');
    element.textContent = 'Добавить новое';

    return element;
  }
}
