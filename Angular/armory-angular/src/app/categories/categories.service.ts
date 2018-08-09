import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ALL_CATEGORIES_URL } from '../consts/api.urls';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get(ALL_CATEGORIES_URL);
  }
}
