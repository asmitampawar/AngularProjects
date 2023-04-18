import { Component,OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public addAns:number=0;
  public subAns:number=0;

  constructor(public obj:ArithmeticService)
  {
  }
  
  ngOnInit()
  {
    this.addAns=this.obj.Add();
    this.subAns=this.obj.Sub();
  }

}
