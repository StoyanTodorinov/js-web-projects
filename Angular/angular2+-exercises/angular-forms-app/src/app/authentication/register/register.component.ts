import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { RegisterModel } from '../../models/register.model'
import { CustomValidators } from '../../validators/custom.validators'
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  router: Router;
  form: FormGroup;
  registerModel: RegisterModel;
  authService: AuthenticationService;

  constructor(authService: AuthenticationService, router: Router) {
    this.router = router;
    this.authService = authService;
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/[a-zA-Z0-9]+/gm),
        Validators.pattern(/[A-Z][a-zA-Z0-9]+/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.pattern(/[a-zA-Z0-9]+/gm)
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.pattern(/[a-zA-Z0-9]+/gm)
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]+/gm),
        Validators.pattern(/[A-Z][a-zA-Z0-9]+/gm)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9]+/gm),
        Validators.pattern(/[A-Z][a-zA-Z0-9]+/gm),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      age: new FormControl('')
    }, CustomValidators.passwordsMatch);
  }

  ngOnInit() {
  }

  register() {
    let values = this.form.value;
    this.registerModel = new RegisterModel(
      values.username,
      values.password,
      values.firstName,
      values.lastName,
      values.email,
      values.age
    );
    this.authService.register(this.registerModel).subscribe(data => {
      this.authService.authtoken = data['_kmd'].authtoken;
      localStorage.setItem('authtoken', data['_kmd'].authtoken);
      localStorage.setItem('username', data['username']);
      this.router.navigateByUrl('/');
    });
  }
}
