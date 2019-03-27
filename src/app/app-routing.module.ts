import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartComponent } from './smart/smart.component';
import { OutputComponent } from './output/output.component';
import { IncrementComponent } from './increment/increment.component';
import { TryComponent } from './try/try.component';
import { UserfontComponent } from './userfont/userfont.component';


const routes: Routes = [
  {
    path: "",
    component: SmartComponent
  },
  {
    path: "output",
    component: OutputComponent
  },
  {
    path: "increment",
    component: IncrementComponent
  },
  {
    path: "try",
    component: TryComponent
  },
  {
    path: "font",
    component: UserfontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
