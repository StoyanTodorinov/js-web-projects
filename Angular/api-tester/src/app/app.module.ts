import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
