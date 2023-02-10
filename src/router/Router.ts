import { HomePage } from '../Components/Main page/MainPage/HomePage';
import { EventsPage } from '../Components/Events page/EventsPage';
import { PlansPage } from '../Components/Plans page/PlansPage';
import { routes } from './constants';

export class Router {
  constructor() {
    this.initRouter();
  }

  render(path: string) {
    let result = new HomePage().element;

    if (routes.Home.match(path)) {
      result = new HomePage().element;
    } else if (routes.Events.match(path)) {
      result = new EventsPage().element;
    } else if (routes.Plans.match(path)) {
      result = new PlansPage().element;
    }
    const routerOutletElement = document.querySelector('#root') as HTMLElement;
    routerOutletElement.replaceChildren(result);
  }

  goTo(path: string) {
    window.history.pushState({ path }, path, path);
    this.render(path);
  }

  initRouter() {
    window.addEventListener('popstate', () => {
      this.render(new URL(window.location.href).pathname);
    });
    document.querySelectorAll('[href^="/"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target as HTMLAnchorElement;
        const { pathname: path } = new URL(link.href);
        this.goTo(path);
      });
    });
    this.render(new URL(window.location.href).pathname);
  }
}
