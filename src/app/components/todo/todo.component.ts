import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  newTodo: string = '';
  todos: any[] = [];
  dones: any[] = [];
  doneList: any;
  todoList: any;
  cdkDropList: any;

  constructor() {}

  ngOnInit(): void {}

  addTodo(event: any) {
    event.preventDefault();
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
