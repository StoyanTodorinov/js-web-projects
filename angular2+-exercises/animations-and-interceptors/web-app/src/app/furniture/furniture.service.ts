import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FurnitureModel } from './models/furniture.model';

const createUrl = 'http://localhost:5000/furniture/create';
const allUrl = 'http://localhost:5000/furniture/all';
const detailsUrl = 'http://localhost:5000/furniture/details/'; // + ID
const mineUrl = 'http://localhost:5000/furniture/mine';
const deleteUrl = 'http://localhost:5000/furniture/delete/'; // + ID

@Injectable()
export class FurnitureService {

  constructor(
    private http: HttpClient
  ) { }

  create(model: FurnitureModel)  {
    return this.http.post(createUrl, model);
  }

  all() {
    return this.http.get(allUrl);
  }

  details(id) {
    return this.http.get(detailsUrl + id);
  }

  mine() {
    return this.http.get(mineUrl);
  }

  delete(id) {
    return this.http.delete(deleteUrl + id);
  }
}