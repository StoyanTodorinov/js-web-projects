import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service'
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    CommonModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
