import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public n1: number = 5;
  public n2: number = 3;

  public Add() {
    return this.n1 + this.n2;
  }

  public Sub() {
    return this.n1 - this.n2;
  }
}
