import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public no1Prime:number=5;
  public no2Prime:number=10;
  public resNo1:boolean=false;
  public resNo2:boolean=false;

  constructor(public obj:NumberService){
  }

  ngOnInit()
  {
    this.resNo1 = this.obj.ChkPrime(this.no1Prime);
    this.resNo2 = this.obj.ChkPrime(this.no2Prime);
  }


}
