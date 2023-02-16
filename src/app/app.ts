import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { PanelNav } from '../components/footer/PanelNav';

export class App {
  footer: PanelNav | undefined;
  router: Router | undefined;
  header: Header | undefined;

  constructor() {
    this.footer;
    this.router;
    this.header;
  }

  render() {
    this.header = new Header();
    this.footer = new PanelNav();
    this.router = new Router();
  }
}
