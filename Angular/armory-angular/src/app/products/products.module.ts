import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPromoComponent } from './promo/promo.component';
import { ProductCategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './details/details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [ProductPromoComponent, ProductCategoryComponent, ProductDetailsComponent, CreateComponent]
})
export class ProductsModule { }
