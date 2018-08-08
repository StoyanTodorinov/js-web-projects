import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
