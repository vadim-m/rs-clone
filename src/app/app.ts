import { PanelNav } from '../components/footer/PanelNav';
import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { carData } from '../car/car_data';
import { settingsMyCar } from '../components/settingsMyCar';

export class App {
  header: Header | undefined;
  main: Router | undefined;
  footer: PanelNav | undefined;
  isUserAuthenticated = false;

  constructor() {
    this.header;
    this.main;
    this.footer;
    this.isUserAuthenticated = this.checkUserAuthentication();
    this.setNewCarDataToLocal();
    this.setSettingMyCar();
  }

  checkUserAuthentication() {
    const hasToken = localStorage.getItem('token');

    return !!hasToken;
  }

  setNewCarDataToLocal() {
    //! заполнить данными с ДБ
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
    this.header = new Header(this.isUserAuthenticated);
    this.footer = new PanelNav(this.isUserAuthenticated);
    this.main = new Router(this.isUserAuthenticated);
  }
}
