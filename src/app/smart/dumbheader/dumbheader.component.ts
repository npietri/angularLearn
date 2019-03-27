import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-dumbheader",
  templateUrl: "./dumbheader.component.html",
  styleUrls: ["./dumbheader.component.css"]
})
export class DumbheaderComponent implements OnInit {
  @Input()
  dumbattribut: string;

  @Output()
  clickButton = new EventEmitter();

  constructor() {}

  ngOnInit() {

    this.clickButton.emit();
  }
}
