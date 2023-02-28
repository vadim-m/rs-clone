export class Spinner {

  constructor() {
    this.render();
  }

  render() {
    const body = document.querySelector('body') as HTMLElement;
    body.prepend(this.createElement());
  }

  createElement() {
    const fragment = document.createElement('div');
    fragment.classList.add('spinner');
    fragment.classList.add('hidden');
    fragment.classList.add('flex');
    fragment.innerHTML = `
      <svg class="spinner__svg" width="200" height="320">
        <rect width="10%" x="5%" rx="5%" height="20%" y="40%">
          <animate attributeName="height" values="20%; 80%; 20%;" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="40%; 10%; 40%;" dur="1s" repeatCount="indefinite" />
        </rect>

        <rect width="10%" x="25%" rx="5%" height="20%" y="40%">
          <animate attributeName="height" values="20%; 80%; 20%;" dur="1s" repeatCount="indefinite" begin="0.2s" />
          <animate attributeName="y" values="40%; 10%; 40%;" dur="1s" repeatCount="indefinite" begin="0.2s" />
        </rect>

        <rect width="10%" x="45%" rx="5%" height="20%" y="40%">
          <animate attributeName="height" values="20%; 80%; 20%;" dur="1s" repeatCount="indefinite" begin="0.4s" />
          <animate attributeName="y" values="40%; 10%; 40%;" dur="1s" repeatCount="indefinite" begin="0.4s" />
        </rect>

        <rect width="10%" x="65%" rx="5%" height="20%" y="40%">
          <animate attributeName="height" values="20%; 80%; 20%;" dur="1s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="y" values="40%; 10%; 40%;" dur="1s" repeatCount="indefinite" begin="0.6s" />
        </rect>

        <rect width="10%" x="85%" rx="5%" height="20%" y="40%">
          <animate attributeName="height" values="20%; 80%; 20%;" dur="1s" repeatCount="indefinite" begin="0.8s" />
          <animate attributeName="y" values="40%; 10%; 40%;" dur="1s" repeatCount="indefinite" begin="0.8s" />
        </rect>
      </svg>
    `;
    return fragment;
  }
}