import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ALL_PRODUCTS_BY_CATEGORYNAME_URL, PROMO_PRODUCTS_URL } from '../consts/api.urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getPromoProducts() {
    return this.http.get(PROMO_PRODUCTS_URL);
  }

  getProductsByCategoryName(categoryName) {
    return this.http.get(ALL_PRODUCTS_BY_CATEGORYNAME_URL + categoryName);
  }
}
