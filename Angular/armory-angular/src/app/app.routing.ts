import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module'
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AdminGuard } from './guards/admin-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'products', loadChildren: () => ProductsModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => AccountModule, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AdminGuard] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//TODO CREATE CREATEPRODUCT COMPONENT