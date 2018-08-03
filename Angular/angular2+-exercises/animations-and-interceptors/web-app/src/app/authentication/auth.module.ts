import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { authComponents } from './index'
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...authComponents
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
