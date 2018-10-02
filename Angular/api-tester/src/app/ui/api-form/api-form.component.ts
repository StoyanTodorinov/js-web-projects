import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { noSpaceValidator } from '../../validators/has-space-validator';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {

  myForm: FormGroup;
  urlEl: any;
  endpointEl: any;
  _data: Object;
  dataFormat: String = 'Pretty';

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      method: ['GET', [
      ]],
      url: [localStorage.getItem("url") || "", [
        Validators.required
      ]],
      endpoint: ['', [
        noSpaceValidator
      ]]
    });
    this.urlEl = document.getElementById('url');
    this.endpointEl = document.getElementById('endpoint');
  }

  private get data() {
    switch (this.dataFormat) {
      case "Pretty":
        return JSON.stringify(this._data, null, 4);
      case "Raw":
        return JSON.stringify(this._data);
      case "Table":
        return JSON.stringify('Hello');
    }
  }

  private get method() {
    return this.myForm.get('method');
  }

  private get url() {
    return this.myForm.get('url');
  }

  private get endpoint() {
    return this.myForm.get('endpoint');
  }

  private addIsValidClass(item) {
    item.classList.remove('is-invalid');
    item.classList.add('is-valid');
  }

  private addIsInvalidClass(item) {
    item.classList.remove('is-valid');
    item.classList.add('is-invalid');
  }

  private changeDataFormat(newDataFormat) {
    this.dataFormat = newDataFormat;
  }

  private submit() {
    let endpoint = this.endpoint.value;
    let base_url = this.url.value;
    localStorage.setItem("url", base_url);
    let method = this.method.value;
    let url = base_url + endpoint;

    this.requestService.makeRequest(method, url, null).subscribe(data => {
      this._data = data;
    });
  }
}
