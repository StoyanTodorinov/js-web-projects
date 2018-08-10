import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [CreateCategoryComponent, EditProductComponent]
})
export class AdminModule { }
