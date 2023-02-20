import { PanelNav } from '../components/footer/PanelNav';
import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { carData } from '../car/car_data';

export class App {
  footer: PanelNav | undefined;
  router: Router | undefined;
  header: Header | undefined;

  constructor() {
    this.footer;
    this.router;
    this.header;
    this.setNewCarDataToLocal();
  }

  setNewCarDataToLocal() {
    if (!localStorage.getItem('car')) {
      // carData будет первоначальная при создании машины прилетать
      localStorage.setItem('car', JSON.stringify(carData));
    }
  }

  render() {
    this.header = new Header();
    this.footer = new PanelNav();
    this.router = new Router();
  }
}
