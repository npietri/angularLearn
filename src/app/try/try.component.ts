import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {



  ngOnInit() {
  }

  title = 'ExoCampusID ';
  nombre: number = 10;
  bool: boolean = true;
  obj: {} = {
    cle: "ma cle"
  }
  public users: Array<{ nom }> = [];

  constructor() {
    this.users.push({ nom: "jean" })
    this.users.push({ nom: "julie" })
    this.users.push({ nom: "paul" })
  }


  square(nbr: number): number {
    return nbr * nbr;
  }
  color: string = "red";

  isClicked(event : Event):void{
      console.log("ca marche");
      }
  changeColor(color: string): void {
    this.color = color;
  }

  public content: string = "";


  public display: boolean = true;

  public carreColor: string = "";

}

