import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrdersAdminComponent } from './page/orders-admin/orders-admin.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsMainComponent } from './page/products-main/products-main.component';
import { MakeorderComponent } from './page/makeorder/makeorder.component';
import { ChangeorderComponent } from './page/changeorder/changeorder.component';
import { ChangeproductComponent } from './page/changeproduct/changeproduct.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { SortPipe } from './pipes/sort.pipe';
import { AdminFilterPipe } from './pipes/admin-filter.pipe';
import { UserFilterPipe } from './pipes/user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    ProductsMainComponent,
    MakeorderComponent,
    ChangeorderComponent,
    ChangeproductComponent,
    NavbarComponent,
    SortPipe,
    AdminFilterPipe,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
