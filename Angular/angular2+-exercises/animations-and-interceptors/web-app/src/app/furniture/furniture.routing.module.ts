import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllFurnitureComponent } from './all-furniture/all-furniture.component';
import { CreateFurnitureComponent } from './create-furniture/create-furniture.component';
import { MyFurnitureComponent } from './my-furniture/my-furniture.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';

const routes: Routes = [
  { path: 'all', component: AllFurnitureComponent },
  { path: 'create', component: CreateFurnitureComponent },
  { path: 'mine', component: MyFurnitureComponent },
  { path: 'details/:id', component: FurnitureDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }