import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbheaderComponent } from './smart/dumbheader/dumbheader.component';
import { OutputComponent } from './output/output.component';
import { IncrementComponent } from './increment/increment.component';
import { DumbincrementComponent } from './increment/dumbincrement/dumbincrement.component';
import { TryComponent } from './try/try.component';
import { FormsModule } from '@angular/forms';
import { UserfontComponent } from './userfont/userfont.component';
import { UserfontdumbComponent } from './userfont/userfontdumb/userfontdumb.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbheaderComponent,
    OutputComponent,
    IncrementComponent,
    DumbincrementComponent,
    TryComponent,
    UserfontComponent,
    UserfontdumbComponent,
 
  
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
