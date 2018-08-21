import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ALL_CATEGORIES_URL,
  CREATE_CATEGORY_URL
} from '../api.constants/api.urls';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  create(category) {
    return this.http.post(CREATE_CATEGORY_URL, category);
  }

  getCategories() {
    return this.http.get(ALL_CATEGORIES_URL);
  }
}
