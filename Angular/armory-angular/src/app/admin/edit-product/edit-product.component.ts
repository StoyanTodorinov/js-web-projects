import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm: FormGroup;
  product: any;
  formIsReady: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private productsService: ProductsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let productId = params['productId'];
      this.productsService.getProductDetailsById(productId).subscribe(product => {
        this.product = product;
        this.myForm = this.fb.group({
          name: [this.product.name, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(16)
          ]],
          price: [this.product.price, [
            Validators.required,
            Validators.min(1)
          ]],
          promo: [this.product.promo, [
            Validators.required,
            Validators.min(0),
            Validators.max(100)
          ]],
          img: [this.product.img, [
            Validators.required
          ]],
          description: [this.product.description, [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(100)
          ]],
          additionalInformation: [this.product.additionalInformation, [
            // Validators.pattern('([a-zA-Z0-9]+),\s*([a-zA-Z0-9]+)')
            //TODO CREATE A BETTER REGEX PATTERN
            //(\w+:\s*(\w+|\s?)+,)+
          ]]
        });
        this.formIsReady = true;
      });
    });
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

  get promo() {
    return this.myForm.get('promo');
  }

  get description() {
    return this.myForm.get('description');
  }

  get additionalInformation() {
    return this.myForm.get('additionalInformation');
  }

  submit() {
    let product = this.myForm.value;
    product._id = this.product._id;
    if (product.additionalInformation === '') {
      product.additionalInformation = [];
    } else {
      product.additionalInformation = product.additionalInformation
        .trim()
        .split(/:|,/)
        .map(item => item.trim());
    }
    this.productsService.edit(product).subscribe(data => {
      this.toastr.success('Product editted');
      this.location.back();
    });
  }
}
