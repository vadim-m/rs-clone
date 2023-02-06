import './index.html';
import './main.css';
import { App } from './App/App';

const root = document.querySelector('#root');
const app = new App();

if (!root) throw new Error('Failed to load container element');
else {
  root.innerHTML = app.render();
}
