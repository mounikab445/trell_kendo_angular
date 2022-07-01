import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.appService.toggleHelp.next(false);
  }
}
