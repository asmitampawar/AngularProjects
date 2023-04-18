import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  public cntCapital: number = 0;
  public cntSmall: number = 0;
  public str: string = "AsMitAroHITRajveer";

  constructor(public obj: StringService) { }

  public ngOnInit() {
    this.cntCapital = this.obj.CountCapital(this.str);
    this.cntSmall = this.obj.CountSmall(this.str);
  }


}
