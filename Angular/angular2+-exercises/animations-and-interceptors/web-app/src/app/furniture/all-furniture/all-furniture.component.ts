import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../models/list.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {

  products: any;
  pageSize: number = 1;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.furnitureService.all().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  pageChanged(ev) {
    this.currentPage = ev;
  }
}
