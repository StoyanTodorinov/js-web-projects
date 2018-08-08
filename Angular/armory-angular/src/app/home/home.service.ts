import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NEW_PRODUCTS_URL, PROMO_PRODUCTS_URL } from '../consts/api.urls';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getNewProducts() {
    return this.http.get(NEW_PRODUCTS_URL);
  }

  getPromoProducts() {
    return this.http.get(PROMO_PRODUCTS_URL);
  }
}
