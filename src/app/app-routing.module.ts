import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartLayoutComponent } from './navigation/cart-layout.component';
import { HomeLayoutComponent } from './navigation/home-layout.component';

const routes: Routes = [
  {path: 'Cart-Layout', component: CartLayoutComponent},
  {path: 'home', component: HomeLayoutComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
