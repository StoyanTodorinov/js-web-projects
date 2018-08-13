import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myForm: FormGroup;
  isEditing: boolean;
  user: any;
  username: string;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.isEditing = false;
  }

  ngOnInit() {
    this.user = this.authService.isLoggedIn();
    this.username = this.user.username;
    this.myForm = this.fb.group({
      name: [this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16)
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      imgUrl: [this.user.imgUrl, []]
    });
  }

  editClick() {
    this.isEditing = true;
  }

  submit() {
    this.isEditing = false;
    this.user.email = this.email.value;
    this.user.name = this.name.value;
    this.user.imgUrl = this.imgUrl.value;
    this.authService.update(this.user).subscribe(user => {
      this.toastr.success('Profile updated');
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  get email() {
    return this.myForm.get('email');
  }

  get imgUrl() {
    return this.myForm.get('imgUrl');
  }
}
