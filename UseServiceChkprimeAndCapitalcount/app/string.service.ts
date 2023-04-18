import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }


  public CountCapital(str: string): number {
    let i: number = 0;
    let cnt: number = 0;
    for (i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
        cnt++;
      }
    }
    return cnt;
  }

  public CountSmall(str: string): number {
    let i: number = 0;
    let cnt: number = 0;
    for (i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        cnt++;
      }
    }
    return cnt;
  }



}
