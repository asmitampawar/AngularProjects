import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  public str = "Marvellous Infosystems.";
  fun() {

    if(this.str=="Marvellous Infosystems.")
    this.str = "Educating for Better Tommoro";
    else
    this.str = "Marvellous Infosystems.";
  }

}
