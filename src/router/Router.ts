import { routes } from './constants';
import { HomePage } from '../pages/homePage/HomePage';
import { EventsPage } from '../pages/eventsPage/EventsPage';
import { PlansPage } from '../pages/plansPage/PlansPage';
import { Service } from '../pages/serviceAddPage/service';
import { Reminder } from '../pages/reminderAddPage/reminder';
import { Refuel } from '../pages/refuelAddPage/refuel';

export class Router {
  url: URL;
  parent: HTMLElement;
  homePage: HomePage | null = null;
  servicePage: Service | null = null;
  eventsPage: EventsPage | null = null;
  plansPage: PlansPage | null = null;
  reminderPage: Reminder | null = null;
  refuelPage: Refuel | null = null;
  constructor() {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.url = new URL(window.location.href);
    this.homePage;
    this.eventsPage;
    this.plansPage;
    this.servicePage;
    this.reminderPage;
    this.refuelPage;
    this.initRouter();
  }

  render(path: string) {
    if (routes.Home.match(path)) {
      this.homePage = new HomePage();
    } else if (routes.Events.match(path)) {
      this.eventsPage = new EventsPage();
    } else if (routes.Plans.match(path)) {
      this.plansPage = new PlansPage();
    } else if (routes.Refuel.match(path)) {
      this.refuelPage = new Refuel();
    } else if (routes.Service.match(path)) {
      this.servicePage = new Service();
    } else if (routes.Reminder.match(path)) {
      this.reminderPage = new Reminder();
    } else if (routes.Other.match(path)) {
      // result = new PlansPage().element;
    }
  }

  destroy() {
    this.homePage = null;
    this.eventsPage = null;
    this.plansPage = null;
    this.servicePage = null;
    this.reminderPage = null;
    this.refuelPage = null;
    this.parent.innerHTML = '';
  }

  goTo(path: string) {
    window.history.pushState({ path }, path, path);
    this.render(path);
  }

  initRouter() {
    window.addEventListener('popstate', () => {
      this.destroy();
      this.render(new URL(window.location.href).pathname);
    });
    document.querySelectorAll('[href^="/"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.currentTarget as HTMLAnchorElement;
        const { pathname: path } = new URL(link.href);

        if (this.url.pathname !== path) {
          this.destroy();
          this.url.pathname = path;
        } else {
          return;
        }
        this.goTo(path);
      });
    });
    this.render(new URL(window.location.href).pathname);
  }
}
