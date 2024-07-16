import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../pages/add-task/add-task.page';
import { TodoService } from '../services/todo.service';
import { UpdatetaskPage } from '../pages/updatetask/updatetask.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList : any[] =[]

  today : number = Date.now()

  constructor(public modalCtrl : ModalController, public todoService : TodoService) {
    this.getAllTask()
  }

  delete(key : any){
    //.log(key)
    this.todoService.deleteTask(key)
    this.getAllTask()
    //this.todoList.splice(index, 1)
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTask()
    console.log(this.todoService.getAllTask())
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component : AddTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      this.getAllTask()
    })

    return await modal.present()
  }

  async update(selectedTask : any){
    const modal = await this.modalCtrl.create({
      component: UpdatetaskPage,
      componentProps : {task : selectedTask}
    })

    console.log(selectedTask)

    return await modal.present()
  }

}
