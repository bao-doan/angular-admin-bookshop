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

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'manage-order', component: OrderComponent },
  { path: 'manage-user', component: UserComponent },
  { path: 'manage-staff', component: StaffComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
