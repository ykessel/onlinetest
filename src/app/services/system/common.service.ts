import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private data = new BehaviorSubject('es');
  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}
