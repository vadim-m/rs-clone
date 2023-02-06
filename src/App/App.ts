import { Nav } from '../Components/Main page/Nav';
import { Main } from '../Components/Main page/Main/Main';

export class App {
  private nav = new Nav();
  private main = new Main();

  render() {
    return `
    <div class="container mx-auto">
      <header class="header fixed bottom-0 left-0 right-0 z-40 bg-white">
          ${this.nav.render()}
      </header>
      <main class="main">
          ${this.main.render()}
      </main>
    </div>
    `;
  }
}
