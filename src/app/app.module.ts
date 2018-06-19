import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';
import { StaffComponent } from './staff/staff.component';
// Import Froala Editor.
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// Import Angular2 plugin.
import { ForbiddenValidatorDirective } from './app-directive/forbidden-name.directive';

import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtInterceptor } from './_helpers';
import { fakeBackendProvider } from './_helpers';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    DashboardComponent,
    ProductAddComponent,
    ForbiddenValidatorDirective,
    BreadcrumbComponent,
    OrderComponent,
    UserComponent,
    StaffComponent,
    HomeLayoutComponent,
    HomeComponent,
    LoginLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
