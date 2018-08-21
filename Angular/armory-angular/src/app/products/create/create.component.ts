import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  myForm: FormGroup;
  categoryName: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private productsService: ProductsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
    });
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16)
      ]],
      price: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      img: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]],
      additionalInformation: ['', [
        // Validators.pattern('([a-zA-Z0-9]+),\s*([a-zA-Z0-9]+)')
        //TODO CREATE A BETTER REGEX PATTERN
        //(\w+:\s*(\w+|\s?)+,)+
      ]]
    })
  }

  get name() {
    return this.myForm.get('name');
  }

  get price() {
    return this.myForm.get('price');
  }

  get img() {
    return this.myForm.get('img');
  }

  get description() {
    return this.myForm.get('description');
  }

  get additionalInformation() {
    return this.myForm.get('additionalInformation');
  }

  submit() {
    let product = this.myForm.value;
    if (product.additionalInformation === '') {
      product.additionalInformation = [];
    } else {
      product.additionalInformation = product.additionalInformation
        .trim()
        .split(/:|,/)
        .map(item => item.trim());
    }
    product.categoryName = this.categoryName;
    this.productsService.create(product).subscribe(data => {
      this.toastr.success('Product added');
      this.location.back();
    });
  }
}
