import { Info } from './Info';
import { Plans } from './Plans';
import { Events } from './Events';

export class Main {
  private info = new Info();
  private plans = new Plans();
  private events = new Events();

  render() {
    return `       
      <section class="info">
        ${this.info.render()}
      </section>

      <section class="plans">
        ${this.plans.render()}
      </section>

      <section class="events relative py-2 px-4 rounded-lg bg-slate">
      ${this.events.render()}
      </section>
    `;
  }
}
