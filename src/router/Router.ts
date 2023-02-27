import { routes } from './constants';
import { HomePage } from '../pages/homePage/HomePage';
import { EventsPage } from '../pages/eventsPage/EventsPage';
import { PlansPage } from '../pages/plansPage/PlansPage';
import { Service } from '../pages/serviceAddPage/service';
import { Reminder } from '../pages/reminderAddPage/reminder';
import { Refuel } from '../pages/refuelAddPage/refuel';
import { Other } from '../pages/otherAddPage/other';
import { StatisticPage } from '../pages/statisticPage/StatisticPage';
import { LoginPage } from '../pages/loginPage/login';
import { RegistrationPage } from '../pages/registrationPage/registration';
import { SettingsPage } from '../pages/settingsPage/SettingsPage';
import { TodoPage } from '../pages/toDoPage/todo';
import { getAppSettingsFromLS } from '../helpers/localStorage';

export class Router {
  url: URL;
  parent: HTMLElement;
  homePage: HomePage | null;
  servicePage: Service | null;
  statisticPage: StatisticPage | null;
  eventsPage: EventsPage | null;
  plansPage: PlansPage | null;
  reminderPage: Reminder | null;
  refuelPage: Refuel | null;
  otherPage: Other | null;
  loginPage: LoginPage | null;
  registrationPage: RegistrationPage | null;
  toDoPage: TodoPage | null;
  isUserAuthenticated: boolean;
  settingsPage: SettingsPage | null;

  constructor(isUserAuthenticated: boolean) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.isUserAuthenticated = isUserAuthenticated;
    this.url = new URL(window.location.href);
    this.homePage = null;
    this.servicePage = null;
    this.statisticPage = null;
    this.eventsPage = null;
    this.plansPage = null;
    this.reminderPage = null;
    this.refuelPage = null;
    this.otherPage = null;
    this.loginPage = null;
    this.registrationPage = null;
    this.toDoPage = null;
    this.settingsPage = null;
    this.render(new URL(window.location.href).pathname);
    this.checkDarkMode();
    this.setOrientation();
  }

  checkUserAuthentication() {
    const hasToken = localStorage.getItem('token');

    this.isUserAuthenticated = !!hasToken;
  }

  setOrientation() {
    const tabButton = document.querySelector('.menu');
    const burger = document.querySelector('.header__burger');
    const logo = document.querySelector('.header__logo');
    const navbarMenu = document.querySelector('.navbar__menu');

    const orientation = getAppSettingsFromLS()?.orientation;

    if (orientation) {
      tabButton?.classList.remove('right-3');
      tabButton?.classList.add('left-3');
      navbarMenu?.classList.remove('right-0');
      navbarMenu?.classList.add('left-0');
      burger?.classList.add('order-1');
      logo?.classList.add('order-2');
    } else {
      tabButton?.classList.add('right-3');
      tabButton?.classList.remove('left-3');
      navbarMenu?.classList.add('right-0');
      navbarMenu?.classList.remove('left-0');
      burger?.classList.remove('order-1');
      logo?.classList.remove('order-2');
    }
  }

  checkDarkMode() {
    const settings = getAppSettingsFromLS();

    const html = document.querySelector('html') as HTMLElement;
    if (settings?.darkTheme) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  render(path: string) {
    if (!this.isUserAuthenticated && location.pathname === '/signup') {
      this.registrationPage = new RegistrationPage(this.goTo.bind(this));
      return;
    } else if (!this.isUserAuthenticated) {
      this.loginPage = new LoginPage(this.goTo.bind(this));
      return;
    }

    if (routes.Home.match(path)) {
      this.homePage = new HomePage(this.goTo.bind(this));
    } else if (routes.Events.match(path)) {
      this.eventsPage = new EventsPage();
    } else if (routes.Plans.match(path)) {
      this.plansPage = new PlansPage();
    } else if (routes.Statistic.match(path)) {
      this.statisticPage = new StatisticPage();
    } else if (routes.Refuel.match(path)) {
      this.refuelPage = new Refuel();
    } else if (routes.Service.match(path)) {
      this.servicePage = new Service();
    } else if (routes.Reminder.match(path)) {
      this.reminderPage = new Reminder();
    } else if (routes.Other.match(path)) {
      this.otherPage = new Other();
    } else if (routes.Login.match(path)) {
      this.loginPage = new LoginPage(this.goTo.bind(this));
    } else if (routes.Todo.match(path)) {
      this.toDoPage = new TodoPage(this.goTo.bind(this));
    } else if (routes.Registration.match(path)) {
      this.registrationPage = new RegistrationPage(this.goTo.bind(this));
    } else if (routes.Settings.match(path)) {
      this.settingsPage = new SettingsPage(this.goTo.bind(this));
    }

    this.addListeners();
  }

  destroy() {
    this.homePage = null;
    this.eventsPage = null;
    this.plansPage = null;
    this.statisticPage = null;
    this.servicePage = null;
    this.reminderPage = null;
    this.refuelPage = null;
    this.otherPage = null;
    this.loginPage = null;
    this.registrationPage = null;
    this.toDoPage = null;
    this.settingsPage = null;
    this.parent.innerHTML = '';
  }

  async goTo(path: string) {
    window.history.pushState({ path }, path, path);
    this.checkUserAuthentication();
    this.destroy();
    this.render(path);
    this.checkDarkMode();
    this.setOrientation();
  }

  addListeners() {
    // ! ломаент рендерс при переходе по стрелкам
    // window.addEventListener('popstate', () => {
    //   this.destroy();
    //   this.render(new URL(window.location.href).pathname);
    // });

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
  }
}
