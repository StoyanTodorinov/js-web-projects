import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ALL_PRODUCTS_BY_CATEGORYNAME_URL,
  PROMO_PRODUCTS_URL,
  PRODUCTS_BY_ID_URL,
  GET_COMMENTS_BY_PRODUCT_ID_URL,
  ALL_PRODUCTS_BY_ARRAY_OF_IDS_URL,
  CREATE_PRODUCT_URL,
  UPDATE_PRODUCT_URL
} from '../api.constants/api.urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  create(product) {
    return this.http.post(CREATE_PRODUCT_URL, product);
  }

  edit(product) {
    return this.http.put(UPDATE_PRODUCT_URL, product);
  }

  getPromoProducts() {
    return this.http.get(PROMO_PRODUCTS_URL);
  }

  getProductsByCategoryName(categoryName) {
    return this.http.get(ALL_PRODUCTS_BY_CATEGORYNAME_URL + categoryName);
  }

  getProductDetailsById(id) {
    return this.http.get(PRODUCTS_BY_ID_URL + id);
  }

  getProductCommentsByProductId(id) {
    return this.http.get(GET_COMMENTS_BY_PRODUCT_ID_URL + id);
  }

  getProductsByArrayOfIds(array) {
    if (!array.length) {
      array = '[]';
    }
  
    return this.http.get(ALL_PRODUCTS_BY_ARRAY_OF_IDS_URL + array);
  }
}
