export class StatisticChart {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="mb-6 flex justify-center"><canvas id="acquisitions" style="max-width: 250px; max-height: 250px"></canvas></div>
    `;
  }
}
