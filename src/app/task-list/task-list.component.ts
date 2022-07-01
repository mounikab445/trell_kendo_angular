import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public toDoTasks: Array<any>;
  public developmentTasks: Array<any>;
  public testingTasks: Array<any>;
  public doneTasks: Array<any>;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.filteredOptions.subscribe(filteredList => this.setTaskLists(filteredList));
  }

  setTaskLists(taskList) {
    this.toDoTasks = taskList.filter(task => task.status === 'toDo');
    this.developmentTasks = taskList.filter(task => task.status === 'development');
    this.testingTasks = taskList.filter(task => task.status === 'testing');
    this.doneTasks = taskList.filter(task => task.status === 'done');
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
