import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { LoginModel } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register.model';

const APP_KEY = 'kid_B1vrwycN7';
const APP_SECRET = '43bd4471a27d4e718633431bdafce995';
const REGISTER_URL = `https://baas.kinvey.com/user/${APP_KEY}`;
const LOGIN_URL = `https://baas.kinvey.com/user/${APP_KEY}/login`;
const LOGOUT_URL = `https://baas.kinvey.com/user/${APP_KEY}/_logout`;

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  
  currentAuthtoken: string

  constructor(
    private http: HttpClient,
  ) { }

  login(loginModel: LoginModel) {
    return this.http.post(LOGIN_URL, JSON.stringify(loginModel), {
      headers: this.createAuthHeaders('Basic')
    });
  }

  register(registerModel: RegisterModel) {
    return this.http.post(REGISTER_URL, JSON.stringify(registerModel), {
      headers: this.createAuthHeaders('Basic')
    });
  }

  logout() {
    return this.http.post(LOGOUT_URL, {}, {
      headers: this.createAuthHeaders('Kinvey')
    });
  }

  checkIfLoggedIn() {
    return localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}
