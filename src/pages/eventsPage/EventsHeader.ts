export class EventsHeader {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="events__header pt-3 pb-3 flex justify-between">
      <h1 class="events__title font-bold text-2xl">События</h1>
    </div>
    `;
  }
}
