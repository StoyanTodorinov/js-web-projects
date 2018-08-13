import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import {
  LOGIN_URL,
  REGISTER_URL,
  UPDATE_USER_URL
} from '../api.constants/api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //TODO BCRYPT THE USER
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  private saveUserData(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  login(data) {
    return this.http.post(LOGIN_URL, data).subscribe(userData => {
      this.saveUserData(userData);
      this.toastr.success('Logged in');
      this.router.navigateByUrl('/home');
    });
  }

  register(data) {
    return this.http.post(REGISTER_URL, data).subscribe(userData => {
      this.saveUserData(userData);
      this.toastr.success('Registered');
      this.router.navigateByUrl('/home');
    });
  }

  update(user) {
    return this.http.put(UPDATE_USER_URL, user);
  }

  logout() {
    localStorage.clear();
    this.toastr.info('Logged out');
    this.router.navigateByUrl('/home');
  }

  isLoggedIn() {
    return this.getUser();
  }

  isAdmin() {
    if (this.isLoggedIn()) {
      return this.getUser().roles.includes('Admin');
    }
    return false;
  }

  getToken() {
    if (this.isLoggedIn()) {
      return this.getUser().token;
    }
    return null;
  }

  getFavorites() {
    return this.getUser().favorites;
  }

  setFavorites(favorites) {
    let user = this.getUser();
    user.favorites = favorites;
    this.setUser(user);
    return this.update(user);
  }

  private setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
