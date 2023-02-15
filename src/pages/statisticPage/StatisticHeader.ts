export class StatisticHeader {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
    <div class="statistic__header flex justify-between py-3">
      <div class="statistic__title flex flex-col">
        <span class="text-2xl font-bold leading-3 mb-1">Статистика</span> 
        <span class="statistic__subtitle">
          февраль
        </span>
      </div>
      <button class="statistic__button button text-sm bg-myblue text-white px-7 py-1 rounded-md h-8">Выбрать период</button>
    </div>
    `;
  }
}
