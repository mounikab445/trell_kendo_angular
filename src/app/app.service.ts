import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { mockData } from './mocks/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public toggleHelp = new BehaviorSubject(false);
  public toggleLabels = new BehaviorSubject(false);
  public filteredOptions = new BehaviorSubject([]);

  constructor() {
  }

  getTasks(): Observable<any> {
    return of(mockData);
  }
}
