const gear = require('../assets/icons/gear.png');

export class Header {
  public element: HTMLDivElement;

  constructor() {
    this.element = this.createElement();
    this.element.onclick = this.onClick.bind(this);
  }

  createElement() {
    const a = document.createElement('div');
    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <div class="header__headerle pt-3 pb-3 flex justify-between">
        <h1 class="header__title font-bold text-lg">Chevrolet Aveo, 2007 г.в.</h1>
        <img data-action="save" src="${gear}" class="header__gear w-7 h-7 mr-4" alt="gear-icon">
      </div>
    `;
    a.append(fragment.content);
    return a;
  }

  onClick(event: MouseEvent) {
    const element = event.target as HTMLElement;
    const action = element.dataset.action;
    if (action) {
      alert('сохраняю');
    }
  }
}

new Header();
