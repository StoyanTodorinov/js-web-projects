import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPromoComponent } from './promo/promo.component';
import { ProductCategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'promo', component: ProductPromoComponent },
  { path: 'category/:categoryName', component: ProductCategoryComponent },
  { path: 'details/:productId', component: ProductDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }