import { createTodo, deleteTodo, updateTodo } from '../../helpers/api';
import { getCarTodosFromLS, setCarDataFromDB } from '../../helpers/localStorage';
import { IToDo } from '../../types';

const circle = require('../../assets/icons/dry-clean.png');
const add = require('../../assets/icons/add.png');
const checked = require('../../assets/icons/check-mark.png');
const close = require('../../assets/icons/close.png');

export class TodoPage {
  parent: HTMLElement;
  list: Array<IToDo>;
  navigateTo: (path: string) => void;

  constructor(goTo: (path: string) => void) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.navigateTo = goTo;
    this.list = getCarTodosFromLS();
    this.createElement();
    this.addEventListeners();
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('todo');
    fragment.innerHTML = `
      <div class="relative w-full">
        <div class="relative z-10 flex h-auto max-w-xl px-10 mx-auto md:mx-auto">
          <div class="w-full mt-20 text-left">
            <div class="flex w-full h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow">
              <div class="w-6 h-6 my-auto mr-6">
                <img src="${circle}" alt="LogoCentang">
              </div>
              <form class="flex justify-between w-full">
                <input class="todo__input w-full h-16 border-none" type="text" placeholder="Что нужно сделать ?" value=""> 
                <button type="submit" class="todo__button w-6 h-6 my-auto">
                  <img src="${add}" alt="LogoAdd">
                </button> 
              </form>
            </div>
            <div class="todo__list">
              ${this.renderTodos()}
            </div>
          </div>
        </div>
      </div>
    `;
    this.parent.append(fragment);
  }

  addEventListeners() {
    // кнопка добавления новой тудушки
    const addTodoBtn = document.querySelector('.todo__button') as HTMLButtonElement;
    // делегирование событий при клике на туду лист
    const todoList = document.querySelector('.todo__list') as HTMLDivElement;

    addTodoBtn.addEventListener('click', this.addTodo);
    todoList.addEventListener('click', this.updateToDoItem);
  }

  addTodo = async (event: MouseEvent) => {
    event.preventDefault();
    const todoInput = document.querySelector('.todo__input') as HTMLInputElement;
    const addTodoBtn = document.querySelector('.todo__button') as HTMLButtonElement;

    if (todoInput.value !== '') {
      const todoData: IToDo = {
        text: todoInput.value,
        progress: false,
      };

      todoInput.disabled = true;
      addTodoBtn.disabled = true;

      const res = await createTodo(todoData);
      const status = res.status;

      if (status === 200 || status === 201) {
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // обновить страницу todo
        this.navigateTo('/todo');
      }
    }
  };

  updateToDoItem = async (event: MouseEvent) => {
    const item = event.target as HTMLImageElement;

    if (item.classList[0] === 'todo__close') {
      const todo = item.parentElement as HTMLButtonElement;
      const res = await deleteTodo(todo.id);

      if (res.status === 200 || res.status === 201) {
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // обновляем страницу
        this.navigateTo('/todo');
      }
    }

    if (item.classList[0] === 'todo__unfinished') {
      const todo = item.parentElement as HTMLButtonElement;

      const todoData: IToDo = {
        progress: true,
      };

      const res = await updateTodo(todoData, todo.id);

      if (res.status === 200 || res.status === 201) {
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // обновляем страницу
        this.navigateTo('/todo');
      }
    }

    if (item.classList[0] === 'todo__finished') {
      const todo = item.parentElement as HTMLButtonElement;

      const todoData: IToDo = {
        progress: false,
      };

      const res = await updateTodo(todoData, todo.id);

      if (res.status === 200 || res.status === 201) {
        // получаем и устанавливаем свежие данные в LC
        await setCarDataFromDB();
        // обновляем страницу
        this.navigateTo('/todo');
      }
    }
  };

  renderTodos() {
    this.list = getCarTodosFromLS();

    const todos = this.list
      .map((item) => {
        return `
          <div class="todo__item flex w-full h-16 px-6 mb-3 text-lg leading-tight text-gray-700 align-middle bg-white shadow rounded-lg" id="${
            item._id
          }">
            <button class="w-6 h-6 my-auto mr-6 z-10" id="${item._id}">
              <img src="${item.progress ? checked : circle}" alt="icon-unfinished-circle" class="${
          item.progress ? 'todo__finished' : 'todo__unfinished'
        }">
            </button>
            <p class="flex flex-1 w-full my-auto align-middle border-none input
            ${item.progress ? 'line-through' : 'no-underline'}">
              ${item.text}
            </p>
            <button class="w-6 h-6 my-auto ml-6 z-10" id="${item._id}">
              <img src="${close}" alt="icon-close" class="todo__close">
            </button>
          </div>
        `;
      })
      .join('');

    return todos;
  }
}
