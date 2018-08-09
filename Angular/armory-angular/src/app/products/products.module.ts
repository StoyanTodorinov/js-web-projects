import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPromoComponent } from './promo/promo.component';
import { ProductCategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './details/details.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductPromoComponent, ProductCategoryComponent, ProductDetailsComponent]
})
export class ProductsModule { }
