import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonSliderComponent } from './button-slider/button-slider.component';
import { ApiFormComponent } from './api-form/api-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonSliderComponent,
    ApiFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
