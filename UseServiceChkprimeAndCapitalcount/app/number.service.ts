import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public flag: boolean = true;

  public ChkPrime(no1: number): boolean {

    if (no1 == 1) {
      this.flag = true;
    }

    let i: number = 0;
    let j: number = no1 / 2;

    for (i = 2; i < j; i++) {
      if (no1 % i == 0) {
        this.flag = false;
        break;
      }
    }

    return this.flag;
  }



}
