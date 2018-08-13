import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class ProductPromoComponent implements OnInit {

  products$: Observable<Object>;

  constructor(
    private productsService: ProductsService 
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getPromoProducts();
  }
}
