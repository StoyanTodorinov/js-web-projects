import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  products$: Observable<Object>;
  buttonValue: string = 'Add product';
  title: string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let categoryName = params['categoryName'];
      this.products$ = this.productsService.getProductsByCategoryName(categoryName);
      this.title = categoryName;
    })
  }
}
