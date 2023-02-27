export class StatisticCalendar {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
      
          <!-- Week -->
      <form class="flex gap-8 justify-end dark:text-black">
        <label class="dark:text-white" for="weekInput">За неделю:</label>
        <input type="week" list="weekList" id="weekInput"  class="border w-44 px-2">
        <datalist id="weekList">
          <option value="2022-W12" label="Двенадцатая неделя">
          <option value="2022-W52" label="Последняя неделя">
          <option value="2022-W1" label="Первая неделя">
        </datalist>
      </form>

            <!-- Month -->
      <form class="flex gap-8 justify-end dark:text-black">
        <label class="dark:text-white" for="monthInput">За месяц:</label>
        <input type="month" list="monthList" id="monthInput"  class="border w-44 px-2">
        <datalist id="monthList">
          <option value="2022-10" label="Осень">
          <option value="2022-12" label="Зима">
          <option value="2022-03" label="Весна">
        </datalist>
      </form>

      <!-- Year -->
      <form class="flex gap-8 justify-end dark:text-black">
        <label class="dark:text-white" for="yearInput">За год:</label>
        <input type="year" list="yearList" id="yearInput" class="border w-44 px-2">
        <datalist id="yearList">
          <option value="2023" label="Текущий год">
          <option value="2022" label="Прошлый год">
          <option value="2021" label="2021">
        </datalist>
      </form>
    `;
  }
}
