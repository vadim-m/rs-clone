const gear = require('../../assets/icons/gear.png');

export class Header {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
      <div class="header__headerle pt-3 pb-3 flex justify-between">
        <h1 class="header__title font-bold text-lg">Chevrolet Aveo, 2007 г.в.</h1>
        <img src="${gear}" class="header__gear w-7 h-7 mr-4" alt="gear-icon">
      </div>
    `;
    return fragment.content;
  }
}
