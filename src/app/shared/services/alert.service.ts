import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomAlert } from 'src/app/models/alert';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertSubject: Subject<{
    resolve: (value: { action: 'accept' | 'cancel' }) => void |
      PromiseLike<{ action: 'accept' | 'cancel' }>,
    info: CustomAlert
  }>;

  constructor() {
    this.alertSubject = new Subject();
  }
  show(obj: CustomAlert): Promise<{ action: 'accept' | 'cancel' }> {
    return new Promise((resolve, reject) => {
      this.alertSubject.next({
        resolve,//esto es equivalente a 'resolve: resolve' ya que existe una variable con argumento con ese nombre 
        info: obj
      });
    })

  }
}
