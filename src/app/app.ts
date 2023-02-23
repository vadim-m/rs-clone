import { PanelNav } from '../components/footer/PanelNav';
import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { carData } from '../car/car_data';
import { settingsMyCar } from '../components/settingsMyCar';

export class App {
  footer: PanelNav | undefined;
  router: Router | undefined;
  header: Header | undefined;

  constructor() {
    this.footer;
    this.router;
    this.header;
    this.setNewCarDataToLocal();
    this.setSettingMyCar();
  }

  setNewCarDataToLocal() {
    if (!localStorage.getItem('car')) {
      // carData будет первоначальная при создании машины прилетать
      localStorage.setItem('car', JSON.stringify(carData));
    }
  }

  setSettingMyCar() {
    if (!localStorage.getItem('settingsCar')) {
      // carData будет первоначальная при создании машины прилетать
      localStorage.setItem('settingsCar', JSON.stringify(settingsMyCar));
    }
  }

  render() {
    this.header = new Header();
    this.footer = new PanelNav();
    this.router = new Router();
  }
}
