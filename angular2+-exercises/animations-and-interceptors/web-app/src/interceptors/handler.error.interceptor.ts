import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && request.url.endsWith('login')) {
          localStorage.setItem('token', event.body.token);
          localStorage.setItem('name', event.body.user.name);
          console.log('TOKEN SAVED!');
          this.router.navigateByUrl('/home');
        }
        if (event instanceof HttpResponse && request.url.endsWith('register')) {
          this.router.navigateByUrl('/signin');
        }

      }, (err: any) => {
        //TODO HANDLE ALL ERRORS IF POSSIBLE
        console.log(err);
      }));
  }
}
