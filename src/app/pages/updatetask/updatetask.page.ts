import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.page.html',
  styleUrls: ['./updatetask.page.scss'],
})
export class UpdatetaskPage implements OnInit {
  @Input() task : any

  categories : any[]= []
  categorySelectedCategory : any

  taskName: any
  taskDate: any
  taskPriority: any
  taskCategory: any

  taskObject: any

  constructor(public modalCntrl: ModalController) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')

    this.taskName = this.task.value.taskname
    this.taskDate = this.task.value.taskDate
    this.taskPriority = this.task.value.taskPriority
    this.taskCategory = this.task.value.taskCategory
    //console.log(this.task)
  }

  async dismiss() {
    await this.modalCntrl.dismiss(this.taskObject)
  }

  selectedCategory(index: any) {
    this.taskCategory = this.categories[index]
  }
}
