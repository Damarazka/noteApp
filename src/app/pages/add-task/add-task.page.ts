import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  categories : any[]= []
  categorySelectedCategory : any

  taskName: any
  taskDate: any
  taskPriority: any
  taskCategory: any

  taskObject: any

  constructor(public modalCntrl: ModalController, public todoService : TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
  }

  async dismiss() {
    await this.modalCntrl.dismiss(this.taskObject)
  }

  selectedCategory(index: any) {
    this.taskCategory = this.categories[index]
  }

  async addTask() {
    this.taskObject = ({ itemName: this.taskName, itemDate: this.taskDate, itemPriority: this.taskPriority, itemCategory: this.taskCategory })
                          console.log(this.taskObject)
                          let uid = this.taskName+ this.taskDate
                          if (uid) {
                            await this.todoService.addTask(uid,this.taskObject)
                          }else{
                            console.log("can't save empty task")
                          }
                          this.dismiss()
  }
}
