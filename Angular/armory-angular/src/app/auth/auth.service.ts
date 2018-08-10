import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { LOGIN_URL, REGISTER_URL } from '../consts/api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  private saveUsernameAndToken(userData) {
    localStorage.setItem('username', userData.username);
    localStorage.setItem('token', userData.token);
    localStorage.setItem('isAdmin', userData.roles.includes('Admin'));
  }

  login(data) {
    return this.http.post(LOGIN_URL, data).subscribe(userData => {
      this.saveUsernameAndToken(userData);
      this.toastr.success('Logged in');
      this.router.navigateByUrl('/home');
    });
  }

  register(data) {
    return this.http.post(REGISTER_URL, data).subscribe(userData => {
      this.saveUsernameAndToken(userData);
      this.toastr.success('Registered');
      this.router.navigateByUrl('/home');
    });
  }

  logout() {
    localStorage.clear();
    this.toastr.info('Logged out');
    this.router.navigateByUrl('/home');
  }

  isLoggedIn() {
    return localStorage.getItem('username');
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem('isAdmin'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
