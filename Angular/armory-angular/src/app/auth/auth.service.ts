import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOGIN_URL, REGISTER_URL } from '../consts/api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(LOGIN_URL, data);
  }

  register(data) {
    return this.http.post(REGISTER_URL, data);
  }
}
