import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickAction(increment: boolean) {
    increment ? this.value++ : this.value--;
  }

}
