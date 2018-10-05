import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { noSpaceValidator } from '../../validators/has-space-validator';
import { JsonSyntaxHighlightService } from '../../services/json-syntax-highlight.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.css']
})
export class ApiFormComponent implements OnInit {

  myForm: FormGroup;
  urlEl: any;
  endpointEl: any;
  data: object;
  dataFormat: string = 'Pretty';
  numberOfInputs: Array<number> = [];
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private jsonSyntaxHighlightService: JsonSyntaxHighlightService
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

  private getData() {
    switch (this.dataFormat) {
      case "Pretty":
        return this.jsonSyntaxHighlightService.syntaxHighlight(JSON.stringify(this.data, null, 4));
      case "Table":
        return this.data;
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

  private appendInputField() {
    this.numberOfInputs.push(this.id++);
  }

  private removeHeaderInput(item) {
    this.numberOfInputs = this.numberOfInputs.filter(x => x !== item);
  }

  private download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,'
      + encodeURIComponent(JSON.stringify(this.data, null, 2)));
    element.setAttribute('download', 'result.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  private submit() {
    this.data = null;
    let endpoint = this.endpoint.value;
    let base_url = this.url.value;
    localStorage.setItem("url", base_url);
    let method = this.method.value;
    let url = base_url + endpoint;

    this.requestService.makeRequest(method, url, null).subscribe(data => {
      this.data = data;
    });
  }
}
