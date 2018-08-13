import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  declarations: [MyProfileComponent, FavoritesComponent]
})
export class AccountModule { }
