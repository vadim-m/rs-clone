import { PanelNav } from '../components/footer/PanelNav';
import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { carData } from '../car/car_data';
import { defaultSettings } from '../constants/constants';
import { setUserSettings } from '../helpers/authentication';

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
    this.setSettings();
    this.setNewCarDataToLocal();
  }

  checkUserAuthentication() {
    const hasToken = localStorage.getItem('token');

    return !!hasToken;
  }

  setSettings() {
    if (!localStorage.getItem('settingsCar')) {
      setUserSettings(defaultSettings);
    } else {
      //! update get from API ниже
      // settings
      // info
      // fuels
      // services
      // others
      // reminders
      const todos = get().json();
      car.Todos = todos;
    }
  }

  // ! тут
  // async loadCarData() {
  //   const res = await getCar();
  //   const status = res.status;
  //   const data: ICar = await res.json();
  //   if (status === 200) {
  //     this.setCarData(data);
  //   }
  // }

  setNewCarDataToLocal() {
    //! заполнить данными с ДБ
    if (this.isUserAuthenticated) {
      // carData будет первоначальная при создании машины прилетать
      localStorage.setItem('car', JSON.stringify(carData));
    }
  }

  render() {
    this.header = new Header(this.isUserAuthenticated);
    this.footer = new PanelNav(this.isUserAuthenticated);
    this.main = new Router(this.isUserAuthenticated);
  }
}
