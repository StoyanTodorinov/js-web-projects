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
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (request.url.endsWith('signup')) {
            this.router.navigateByUrl('/signin');
            this.toastr.success('Registered!');
          }
          if (request.url.endsWith('login')) {
            localStorage.setItem('token', event.body.token);
            localStorage.setItem('name', event.body.user.name);
            console.log('TOKEN SAVED!');
            this.router.navigateByUrl('/home');
            this.toastr.success('Logged in!');
          }
        }
      }, (err: any) => {
        //TODO HANDLE ALL ERRORS IF POSSIBLE
        this.toastr.error(err.error.message);
      }));
  }
}
