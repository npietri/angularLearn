import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-userfont",
  templateUrl: "./userfont.component.html",
  styleUrls: ["./userfont.component.css"]
})
export class UserfontComponent implements OnInit {
  value = 0;

  constructor() {}

  ngOnInit() {}

  onClickAction(increment: boolean) {
    increment ? this.value++ : this.value--;
  }
}
