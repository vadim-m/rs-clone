import { IToDo } from '../../types';
//import { getTaskAPI } from '../../helpers/api';
import { postTask } from '../../helpers/api';
import { updateTasks } from '../../helpers/api';
import { deleteTask } from '../../helpers/api';

const circle = require('../../assets/icons/dry-clean.png');
const add = require('../../assets/icons/add.png');
const checked = require('../../assets/icons/check-mark.png');
const close = require('../../assets/icons/close.png');

export class ToDoPage {
  parent: HTMLElement;
  list: Array<IToDo>;

  constructor(list: Array<IToDo>) {
    this.parent = document.querySelector('.main') as HTMLElement;
    this.list = list;
    this.createElement();
    this.addEventListener();
  }

  createElement() {
    const fragment = document.createElement('section');
    fragment.classList.add('todo');
    fragment.innerHTML = `

        <div class="relative w-full min-h-screen">
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
                ${this.renderToDos()}
              </div>
          </div>
        </div>
      
    `;
    this.parent.append(fragment);
  }

  addEventListener() {
    const todoButton = document.querySelector('.todo__button') as HTMLButtonElement;
    const todoList = document.querySelector('.todo__list') as HTMLDivElement;

    todoButton.addEventListener('click', this.addTodo);
    todoList.addEventListener('click', this.updateToDoItem);
  }

  addTodo(event: MouseEvent) {
    event.preventDefault();
    const todoInput = document.querySelector('.todo__input') as HTMLInputElement;

    if (todoInput.value !== '') {
      const todoList = document.querySelector('.todo__list') as HTMLDivElement;

      const todoDiv = document.createElement('div');
      todoDiv.className =
        'todo__item flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white shadow rounded-t-lg';

      const newTodoButton = document.createElement('button');
      newTodoButton.className = 'w-6 h-6 my-auto mr-6 z-10';

      const newTodoImg = document.createElement('img');
      newTodoImg.src = '/assets/dry-clean.png';
      newTodoImg.alt = 'icon-unfinished-circle';
      newTodoImg.className = 'todo__unfinished';
      newTodoButton.appendChild(newTodoImg);

      const newTodo = document.createElement('p');
      newTodo.className =
        'flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600';
      newTodo.innerText = todoInput.value;

      const newTodoClose = document.createElement('button');
      newTodoClose.className = 'w-6 h-6 my-auto ml-6 z-10';

      const newTodoImgClose = document.createElement('img');
      newTodoImgClose.src = `${close}`;
      newTodoImgClose.alt = 'icon-close';
      newTodoImgClose.className = 'todo__close';
      newTodoClose.appendChild(newTodoImgClose);

      todoDiv.append(newTodoButton, newTodo, newTodoClose);

      todoList.appendChild(todoDiv);

      //ADDING TO BACK
      postTask(todoInput.value);

      todoInput.value = '';
    }
  }

  updateToDoItem(event: MouseEvent) {
    const item = event.target as HTMLImageElement;

    if (item.classList[0] === 'todo__close') {
      const todo = item.parentElement as HTMLButtonElement;
      const parent = todo.parentElement as HTMLDivElement;
      deleteTask(parent.id);
      parent.remove();
    }

    if (item.classList[0] === 'todo__unfinished') {
      const todo = item.parentElement as HTMLButtonElement;
      const parent = todo.parentElement as HTMLDivElement;
      const p = parent.querySelector('p') as HTMLElement;
      p.classList.add('line-through');
      item.remove();
      const newTodoImg = document.createElement('img');
      newTodoImg.src = `${checked}`;
      newTodoImg.alt = 'icon-finished-circle';
      newTodoImg.className = 'todo__finished';
      todo.appendChild(newTodoImg);
      updateTasks(parent.id, p.innerText, true);
    }

    if (item.classList[0] === 'todo__finished') {
      const todo = item.parentElement as HTMLButtonElement;
      const parent = todo.parentElement as HTMLDivElement;
      const p = parent.querySelector('p') as HTMLElement;
      p.classList.remove('line-through');
      item.remove();
      const newTodoImg = document.createElement('img');
      newTodoImg.src = `${circle}`;
      newTodoImg.alt = 'icon-unfinished-circle';
      newTodoImg.className = 'todo__unfinished';
      todo.appendChild(newTodoImg);
      updateTasks(parent.id, p.innerText, false);
    }
  }

  renderToDos() {
    //const apiTasks = await getTaskAPI();
    const apiTasks = this.list
      .map((item) => {
        return `
      <div class="todo__item flex w-full h-16 px-6 text-lg leading-tight text-gray-700 align-middle bg-white shadow rounded-t-lg" id="${
        item.id
      }">
        <button class="w-6 h-6 my-auto mr-6 z-10">
          <img src="${item.progress ? checked : circle}" alt="icon-unfinished-circle" class="todo__unfinished">
        </button>
        <p class="flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600 ${
          item.progress ? 'line-through' : 'no-underline'
        }">${item.text}</p>
        <button class="w-6 h-6 my-auto ml-6 z-10">
          <img src="/assets/close.png" alt="icon-close" class="todo__close">
        </button>
      </div>
      `;
      })
      .join('');

    return apiTasks;
  }
}
