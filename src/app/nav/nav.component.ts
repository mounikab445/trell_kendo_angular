import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any>;
  showHelp = false;
  openDialog = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getTasks().subscribe(tasks => {
      this.options = tasks;
      this.appService.filteredOptions.next(tasks);
    })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any {
    const filterValue = name.toLowerCase();
    this.appService.filteredOptions.next(this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) >= 0));
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) >= 0);
  }

  optionSelected(event) {
    this.appService.filteredOptions.next([event.option.value]);
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
    this.appService.toggleHelp.next(this.showHelp);
  }

  dialogClose(task) {
    this.openDialog = false;
    this.options.push(task);
    this.appService.filteredOptions.next(this.options);
  }
}
