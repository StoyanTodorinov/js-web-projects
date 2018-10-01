import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';
import { ApiFormComponent } from './api-form/api-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiFormComponent
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
