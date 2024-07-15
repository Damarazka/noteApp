import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    itemName : 'Coding',
    itemDueDate : '06-22-24',
    itemPiority : 'High',
    itemCategory : 'Work'
  },
  {
    itemName : 'Disign',
    itemDueDate : '06-23-24',
    itemPiority : 'Middle',
    itemCategory : 'Work'
  },
  {
    itemName : 'Shopping',
    itemDueDate : '06-24-24',
    itemPiority : 'Low',
    itemCategory : 'Personal'
  },
  {
    itemName : 'Workout',
    itemDueDate : '06-22-24',
    itemPiority : 'Middle',
    itemCategory : 'Personal'
  }]

  today : number = Date.now()

  constructor() {}

}
