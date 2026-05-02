import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Expert in Angular' },
    { id: 3, description: 'Visit India' },
    { id: 4, description: 'Buy a Car' },
  ];
}
