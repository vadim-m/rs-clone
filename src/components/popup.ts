import { renderButtonWhite } from '../components/button';

export class Popup {
  content: string;
  buttonLeftName: string;
  buttonRightName: string;
  parent: HTMLElement;
  buttonLeftClassName: string;
  buttonLeftID: string;
  buttonRightClassName: string;
  buttonRightID: string;

  constructor(
    content: string,
    buttonLeftName: string,
    buttonLeftClassName: string,
    buttonLeftID: string,
    buttonRightName: string,
    buttonRightClassName: string,
    buttonRightID: string
  ) {
    this.parent = document.querySelector('body') as HTMLElement;
    this.content = content;
    this.buttonLeftName = buttonLeftName;
    this.buttonLeftClassName = buttonLeftClassName;
    this.buttonLeftID = buttonLeftID;
    this.buttonRightName = buttonRightName;
    this.buttonRightClassName = buttonRightClassName;
    this.buttonRightID = buttonRightID;

    this.renderContainerPopup();
    this.createHTMLContainerPopup();
    this.removePopup();
  }

  renderContainerPopup() {
    this.parent.insertAdjacentHTML('afterbegin', this.createHTMLContainerPopup());
  }

  removePopup() {
    const bgPopup = document.querySelector('.bg__popup--grey') as HTMLElement;
    const pageBody = document.querySelector('body') as HTMLElement;
    pageBody.addEventListener('click', (event) => {
      if (
        (event.target as HTMLElement).matches('.bg__popup--grey') ||
        (event.target as HTMLElement).matches('.confirm__btn--cencel') ||
        (event.target as HTMLElement).matches('.confirm__btn--edit') ||
        (event.target as HTMLElement).matches('.confirm__btn--ok')
      ) {
        bgPopup.remove();
      }
      // (bgPopup as HTMLElement).classList.remove('active');
    });
  }

  createHTMLContainerPopup() {
    return `<div class="bg__popup--grey active z-10 fixed top-0 left-0 w-full h-screen bg-dark transition-all">
                <div id="popup__container" class="popup__container active relative top-20 mx-auto bg-white p-5 border border-slate w-96 shadow-lg rounded-md transition-all">
                    ${this.content}
                    <div class="popup__content_confirm flex justify-around">
                        ${renderButtonWhite(this.buttonLeftName, this.buttonLeftClassName, this.buttonLeftID, 32)}
                        ${renderButtonWhite(this.buttonRightName, this.buttonRightClassName, this.buttonRightID, 32)}
                    </div>
                </div>
                    </div>`;
  }
}
