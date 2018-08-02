import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {

  myProducts: any;

  constructor(
    private furnitureService: FurnitureService
  ) { }

  ngOnInit() {
    this.furnitureService
      .mine()
      .subscribe(data => {
        this.myProducts = data;
      })
  }

  delete(id) {
    this.myProducts = this.myProducts.filter(x => x.id !== id);
    this.furnitureService
      .delete(id)
      .subscribe();
  }
}
