import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorHandleInterceptor } from './interceptors/error.handle.interceptor';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HomeService } from './home/home.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories/categories.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    HomeService,
    CategoriesService,
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
