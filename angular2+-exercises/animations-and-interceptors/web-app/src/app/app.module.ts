import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication/auth.service';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { ErrorHandleInterceptor } from '../interceptors/handler.error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
