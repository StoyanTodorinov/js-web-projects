import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module'
import { authComponents } from '.';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [...authComponents]
})
export class AuthModule { }
