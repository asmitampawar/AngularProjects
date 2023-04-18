import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public cntCap: number = 0;
  public cntSmall: number = 0;
  public str: string = "AsmitaRohitRajveer";


  public resNo1:boolean=true;
  public resNo2:boolean=true;

  constructor(public obj: StringService) {}

  ngOnInit() {
    this.cntCap = this.obj.CapitalCount(this.str);
    this.cntSmall = this.obj.SmallCount(this.str);

    this.resNo1 = this.obj.ChkPrime(5);
    this.resNo2=this.obj.ChkPrime(10);

  }
}
