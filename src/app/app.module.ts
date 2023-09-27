import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaComponent } from './prima/prima.component';
import { FormsModule } from '@angular/forms';
import { DoileaComponent } from './doilea/doilea.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PrimaComponent,
    DoileaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
