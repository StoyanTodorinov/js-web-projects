import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { FurnitureRoutingModule } from './furniture.routing.module'
import { furnitureComponents } from './index'
import { FurnitureService } from './furniture.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ...furnitureComponents
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
