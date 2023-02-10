import './index.html';
import './main.css';
import { Router } from './router/Router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { App } from './app/app';

export const router = new Router();

new App();
