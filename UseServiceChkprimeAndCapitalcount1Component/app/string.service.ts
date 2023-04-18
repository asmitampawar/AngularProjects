import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }




  public CapitalCount(str: string): number {
    let cnt: number = 0;
    let i: number = 0;
    for (i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)
        cnt++
    }
    return cnt;

  }

  public SmallCount(str: string): number {
    let cnt: number = 0;
    let i: number = 0;
    for (i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
        cnt++;
    }
    return cnt;
  }

  public ChkPrime(no: number): boolean {
    let flag: boolean = true;
    let i: number = 0;

    if (no == 1)
      return true;

    for (i = 2; i < no / 2; i++) {
      if (no % i == 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
}
