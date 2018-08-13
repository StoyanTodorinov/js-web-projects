import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products$: Observable<Object>;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService
      .getProductsByArrayOfIds(this.authService.getFavorites());
  }
}
