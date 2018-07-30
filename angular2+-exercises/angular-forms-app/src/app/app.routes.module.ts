import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/authenctication.guard.service'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component'

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: RegisterComponent },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }
