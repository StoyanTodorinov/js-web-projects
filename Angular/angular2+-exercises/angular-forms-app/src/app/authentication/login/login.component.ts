import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { LoginModel } from '../../models/login.model'
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  router: Router;
  incorrectUsername: boolean = false;
  incorrectPassword: boolean = false;
  form: FormGroup;
  loginModel: LoginModel;
  authService: AuthenticationService;

  constructor(authService: AuthenticationService, router: Router) {
    this.router = router;
    this.authService = authService;
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  login() {
    let values = this.form.value;
    this.loginModel = new LoginModel(
      values.username,
      values.password
    );
    this.authService.login(this.loginModel).subscribe(data => {
      this.authService.authtoken = data['_kmd'].authtoken;
      localStorage.setItem('authtoken', data['_kmd'].authtoken);
      localStorage.setItem('username', data['username']);
      this.router.navigateByUrl('/');
    }, err => {
      this.error = true;
    });
  }
}
