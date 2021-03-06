import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { ProductAddComponent } from '../product-add/product-add.component';
import { OrderComponent } from '../order/order.component';
import { UserComponent } from '../user/user.component';
import { StaffComponent } from '../staff/staff.component';
import { ProfileComponent } from '../profile/profile.component';

import { AuthGuard } from '../auth/auth.guard';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { HomeComponent } from '../home/home.component';
import { LoginLayoutComponent } from '../login-layout/login-layout.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: '', component: LoginLayoutComponent, children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product-add', component: ProductAddComponent },
      { path: 'manage-order', component: OrderComponent },
      { path: 'manage-user', component: UserComponent },
      { path: 'manage-staff', component: StaffComponent }
    ]
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
