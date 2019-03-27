import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: "app-dumbincrement",
  templateUrl: "./dumbincrement.component.html",
  styleUrls: ["./dumbincrement.component.css"]
})
export class DumbincrementComponent implements OnInit {
  @Output()
  clickAction = new EventEmitter<boolean>();

  @Input()
  isDisabled = false;
  constructor() {}

  ngOnInit() {}

  increment() {
    this.clickAction.emit(true);
  }

  decrement() {
    this.clickAction.emit(false);
  }
}
