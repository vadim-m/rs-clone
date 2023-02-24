export class PlansSearch {
  public element: DocumentFragment;

  constructor() {
    this.element = this.createElement();
  }

  createElement() {
    const fragment = document.createElement('template');
    fragment.innerHTML = `
    <div class="plans__header pt-3 pb-3 flex justify-between">
      <h1 class="plans__title font-bold text-2xl">Планы</h1>
      <button class="plans__button button text-sm bg-myblue text-white px-7 py-1 rounded-md">Добавить новое</button>
    </div>

    <div class="plans__menus grid grid-cols-1 gap-2 justify-between md:grid-cols-2 mb-8">
      <select>
        <option>График ТО</option>
        <option>Мои планы</option>
        <option>Все планы</option>
      </select>
    </div>
    `;
    return fragment.content;
  }
}
