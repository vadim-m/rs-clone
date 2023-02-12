export class EventsPage {
  parent: HTMLElement;
  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.createElement();
  }

  createElement() {
    const temp = document.createElement('h2');
    temp.textContent = 'События';
    this.parent.append(temp);
  }
}
