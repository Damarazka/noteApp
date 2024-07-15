import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../pages/add-task/add-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList : any[] =[]

  today : number = Date.now()

  constructor(public modalCtrl : ModalController) {}

  delete(index : any){
    this.todoList.splice(index, 1)
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component : AddTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data)
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

}
