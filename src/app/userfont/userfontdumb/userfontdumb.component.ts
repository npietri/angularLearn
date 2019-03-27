import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userfontdumb',
  templateUrl: './userfontdumb.component.html',
  styleUrls: ['./userfontdumb.component.css']
})
export class UserfontdumbComponent implements OnInit {

 
  constructor() { }


  ngOnInit() {
  }

  @Output()
  clickAction = new EventEmitter<boolean>();

  @Input()
  isDisabled = false;

  @Input() sizefont: number =10;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }


  increment() {
    this.clickAction.emit(true);
  }

  decrement() {
    this.clickAction.emit(false);
  }




  resize(delta: number) {
    this.sizefont = Math.min(40, Math.max(8, +this.sizefont + delta));
    this.sizeChange.emit(this.sizefont);
  }

}
