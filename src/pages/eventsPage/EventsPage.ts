import { EventsHeader } from './EventsHeader';
import { EventsMenu } from './EventsMenu';
import { EventsList } from './EventsList';
import { createArrEvents, showEvents } from './arrayEvents';
import { eventLang } from '../../lang/addEventLang';
import { currentLiArr, searchLi } from '../../utilits/searchElement';
import { buttonLang } from '../../lang/buttonLang';
import { Popup } from '../../components/popup';
import { IParamsOneEvents } from '../../types';
import { getCurrentLanguage } from '../../utilits/getCurrentSettings';
import { mySetting } from '../../utilits/getCurrentSettings';
import { getUnits } from '../../components/units';

export class EventsPage {
  parent: HTMLElement;
  page = 'events';
  private list = new EventsList(showEvents.all).element;
  private header = new EventsHeader().element;
  private menu = new EventsMenu().element;
  addEventCircule!: HTMLElement;
  selectDisplayDOM: HTMLSelectElement;
  listContainer: HTMLElement;

  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
    this.selectDisplayDOM = document.querySelector('.events__menus_select') as HTMLSelectElement;
    this.listContainer = document.querySelector('.events__list') as HTMLUListElement;
    this.chooseDisplay();
    this.handlerEvents();
  }

  createElement() {
    this.addEventCircule = document.querySelector('.menu') as HTMLElement;
    this.addEventCircule.style.display = 'block';
    const fragment = document.createElement('section');
    this.listContainer = document.createElement('section');
    this.listContainer.classList.add('plans__section-list');
    this.listContainer.innerHTML = `${this.list}`;
    fragment.classList.add('events');
    fragment.innerHTML = `
    ${this.header}
    ${this.menu}
    `;
    this.parent.append(fragment, this.listContainer);
  }

  chooseDisplay() {
    this.selectDisplayDOM.addEventListener('change', () => {
      this.rerenderList();
    });
  }

  rerenderList() {
    const display =
      this.selectDisplayDOM.value === `${eventLang().other}`
        ? showEvents.others
        : this.selectDisplayDOM.value === `${eventLang().refuels}`
        ? showEvents.refuel
        : this.selectDisplayDOM.value === `${eventLang().service}`
        ? showEvents.service
        : showEvents.all;
    (this.listContainer as HTMLElement).innerHTML = '';
    (this.listContainer as HTMLElement).innerHTML = new EventsList(display).element;
  }

  handlerEvents() {
    (this.listContainer as HTMLUListElement).addEventListener('click', (event) => {
      searchLi(event.target as HTMLElement, event.currentTarget as HTMLUListElement);
      const curID = currentLiArr[0].id;
      const curEventsObj = createArrEvents(showEvents.all).filter((e) => e.id === curID)[0];

      const popup = new Popup(
        this.popupContent(curEventsObj),
        buttonLang().edit,
        'confirm__btn--edit',
        'confirm__btn--edit',
        buttonLang().ok,
        'confirm__btn--ok',
        'confirm__btn--ok'
      );
      console.log(popup);
      // console.log(eventLang().other);
      const popupHandler = document.querySelector('.popup__container') as HTMLElement;
      popupHandler.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).matches('.confirm__btn--edit')) {
          if (currentLiArr[0].getAttribute('data-event') === 'other') {
            window.location.href = `/other?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
            console.log(currentLiArr[0].getAttribute('data-event'));
          }
          if (currentLiArr[0].getAttribute('data-event') === 'service') {
            window.location.href = `/service?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
            console.log(eventLang().other);
          }
          if (currentLiArr[0].getAttribute('data-event') === 'refuel') {
            window.location.href = `/refuel?id=${curEventsObj.id}&pageCall=${this.page}&edit=true`;
          }
        }
        if ((event.target as HTMLElement).matches('.confirm__btn--ok')) {
          popup.removePopup();
        }
      });
    });
  }

  popupContent(curEventsObj: IParamsOneEvents) {
    return `
              <h1 class="data text-sm font-bold mb-4 leading-4 text-center">${new Date(
                curEventsObj.date as string
              ).toLocaleString(getCurrentLanguage() === 'English' ? 'en-US' : 'ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
              })}</h1>
            <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().name}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.titleName}</p>
            </div>

            ${
              curEventsObj.amountFuel
                ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().quant}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.amountFuel}${getUnits().volume.slice(2)}</p>
            </div> `
                : ''
            }
            <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().mileage}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.mileage}${getUnits().distance.slice(2)}</p>
            </div>
            
            ${
              curEventsObj.place
                ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().place}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.place}</p>
            </div> `
                : ''
            }  
                    ${
                      curEventsObj.notes
                        ? `        <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().comments}:</p>            
              <p class="name bg-myslate pl-2 mb-2">${curEventsObj.notes}</p>
            </div> `
                        : ''
                    }  
          <div class="flex flex-col">
              <p class="name text-sm leading-3 inline-block mb-1 ml-2">${eventLang().amount}:</p>            
              <p class="name bg-myslate pl-2 mb-10">${curEventsObj.totalPrice}${mySetting().currency}</p>
            </div>  `;
  }
}
