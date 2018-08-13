import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [MyProfileComponent, FavoritesComponent]
})
export class AccountModule { }
