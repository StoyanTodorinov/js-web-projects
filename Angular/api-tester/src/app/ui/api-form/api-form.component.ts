import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {

  myForm: FormGroup;
  urlEl: any;

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      method: ['GET', [

      ]],
      url: ['', [
        Validators.required
      ]]
    });
    this.urlEl = document.getElementById('url')
  }

  submit() {
    console.log(this.myForm);
    console.log(this.url.value);
    console.log(this.method.value);
    console.log(this.url);
  }

  addIsValidClass() {
    this.urlEl.classList.remove('is-invalid');
    this.urlEl.classList.add('is-valid');
  }

  addIsInvalidClass() {
    this.urlEl.classList.remove('is-valid');
    this.urlEl.classList.add('is-invalid');
  }

  get method() {
    return this.myForm.get('method');
  }

  get url() {
    return this.myForm.get('url');
  }
}
