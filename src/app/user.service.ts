import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  public getRequest() {
    return [
      {
        id: 1,
        name: 'John',
        request: 'AZ-400 Voucher',
        wbs: 'PB1221',
        amount: 100
      },
      {
        id: 2,
        name: 'Jane',
        request: 'PSM',
        wbs: 'PB1223',
        amount: 55
      }
    ];
  }
}
