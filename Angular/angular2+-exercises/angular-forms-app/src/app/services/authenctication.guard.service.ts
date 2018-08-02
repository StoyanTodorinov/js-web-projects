import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router
  ) { }

  canActivate(): boolean {
    let auth = localStorage.getItem('authtoken');
    if (!auth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}