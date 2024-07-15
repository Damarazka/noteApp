import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  categories = ['Work', 'Personal', 'Home']

  taskName: any
  taskDate: any
  taskPriority: any
  taskCategory: any

  taskObject: any

  constructor(public modalCntrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCntrl.dismiss(this.taskObject)
  }

  selectedCategory(index: any) {
    this.taskCategory = this.categories[index]
  }

  addTask() {
    this.taskObject = ({ itemName: this.taskName,
                          itemDate: this.taskDate,
                          itemPriority: this.taskPriority,
                          itemCategory: this.taskCategory })
                          this.dismiss()
  }
}
