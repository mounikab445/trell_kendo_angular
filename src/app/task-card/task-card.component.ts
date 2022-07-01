import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  toggleLabels(toggle: boolean) {
    this.appService.toggleLabels.next(toggle);
  }

  getCompletedChecks() {
    return this.task.checklistItems.filter(item => item.done).length
  }
}
