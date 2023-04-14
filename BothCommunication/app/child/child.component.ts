import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output()
  public Myevent = new EventEmitter();

  SendToParent() {
    this.Myevent.emit("Hello from Child");
  }

  @Input()
  public MessageFromParent = "";

}
