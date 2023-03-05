import { PanelNav } from '../components/footer/PanelNav';
import { Router } from '../router/Router';
import { Header } from '../components/header/Header';
import { Spinner } from '../components/spinner/Spinner';
import { defaultSettings } from '../constants/constants';
import { setUserSettings } from '../helpers/authentication';
import { setCarDataFromDB } from '../helpers/localStorage';

export class App {
  header: Header | undefined;
  router: Router | undefined;
  footer: PanelNav | undefined;
  spinner: Spinner | undefined;
  isUserAuthenticated = false;

  constructor() {
    this.header;
    this.router;
    this.footer;
    this.spinner;
    this.isUserAuthenticated = this.checkUserAuthentication();
  }

  checkUserAuthentication() {
    const hasToken = localStorage.getItem('token');

    return !!hasToken;
  }

  setSettings() {
    if (!localStorage.getItem('settingsCar')) {
      setUserSettings(defaultSettings);
    }
  }

  async setNewCarDataToLocal() {
    if (this.isUserAuthenticated) {
      await setCarDataFromDB();
    }
  }

  render() {
    this.setNewCarDataToLocal();
    this.setSettings();

    this.header = new Header();
    this.footer = new PanelNav();
    this.router = new Router(this.isUserAuthenticated);
    this.spinner = new Spinner();
  }
}
