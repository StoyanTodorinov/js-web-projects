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
      .pipe(tap((event: HttpEvent<any>) => { }, (err: any) => {
        let error = err.error;
        if (error.errmsg) {
          if (error.errmsg.includes('username')) {
            this.toastr.error('Choose another username');
          } else if (error.errmsg.includes('categories')) {
            this.toastr.error('Category exists');
          }
        } else {
          this.toastr.error(err.error);
        }
      }))
  }
}