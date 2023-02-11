const gear = require('../../assets/icons/gear.png');

export class Header {
  constructor() {
    this.render();
  }

  render() {
    const body = document.querySelector('body') as HTMLElement;
    body.prepend(this.createElement());
  }

  createElement() {
    const fragment = document.createElement('header');
    fragment.innerHTML = `
      <div class="header__headerle pt-3 pb-3 flex justify-between container mx-auto">
        <h1 class="header__title font-bold text-lg">Chevrolet Aveo, 2007 г.в.</h1>
        <img src="${gear}" class="header__gear w-7 h-7" alt="gear-icon">
      </div>
    `;
    return fragment;
  }
}
