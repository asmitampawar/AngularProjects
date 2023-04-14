import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoButtonPressCaseChange';

  public str = "Marvellous Infosystems."
  public originalStr = this.str;

  LowerCase() {
    this.str = this.str.toLowerCase();
  }
  UpperCase() {
    this.str = this.str.toUpperCase();
  }


}
