import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const NEW_URL = 'http://localhost:1337/api/products/new';
const PROMO_URL = 'http://localhost:1337/api/products/promo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getNewProducts() {
    return this.http.get(NEW_URL);
  }

  getPromoProducts() {
    return this.http.get(PROMO_URL);
  }
}
