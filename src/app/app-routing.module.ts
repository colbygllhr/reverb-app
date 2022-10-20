import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartLayoutComponent } from './navigation/cart-layout.component';
import { HomeLayoutComponent } from './navigation/home-layout.component';
import { LoginLayoutComponent } from './navigation/login-layout/login-layout.component';
import { SignupLayoutComponent } from './navigation/signup-layout/signup-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'cart', component: CartLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'signup', component: SignupLayoutComponent},
  {path: 'signin', component: LoginLayoutComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
