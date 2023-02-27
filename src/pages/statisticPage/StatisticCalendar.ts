export class StatisticCalendar {
  public element: string;

  constructor() {
    this.element = this.createElement();
  }

  private createElement(): string {
    return `
            <!-- Month -->
    <form id="calendar-form">
      <div class="flex gap-8 justify-end dark:text-black mb-4 h-8">
        <label class="dark:text-white" for="monthInput">За месяц:</label>
        <input type="month" list="monthList" id="monthInput"  class="border w-44 px-2">
        <datalist id="monthList">
          <option value="2022-11">
          <option value="2022-12">
          <option value="2023-01">
          <option value="2023-02">
        </datalist>
      </div>

      <!-- Year -->
      <div class="flex gap-8 justify-end h-8 dark:text-black mb-4">
        <label class="dark:text-white" for="yearInput">За год:</label>
        <input type="year" list="yearList" id="yearInput" class="border w-44 px-2">
        <datalist id="yearList">
          <option value="2023" label="Текущий год">
          <option value="2022" label="Прошлый год">
          <option value="2021" label="2021">
        </datalist>
      </div>

      <div class="flex justify-center">
        <button type="submit" id="calendar-ok" class="confirm__btn--ok block items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-myblue rounded-md shadow-sm hover:bg-myblue hover:text-white focus:outline-none focus:shadow-none w-32 my-auto">Сохранить</button>
      </div>
    </form>
    `;
  }
}
