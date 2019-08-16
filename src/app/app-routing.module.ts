import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrdersAdminComponent } from './page/orders-admin/orders-admin.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsMainComponent } from './page/products-main/products-main.component';
import { MakeorderComponent } from './page/makeorder/makeorder.component';
import { ChangeorderComponent } from './page/changeorder/changeorder.component';
import { ChangeproductComponent } from './page/changeproduct/changeproduct.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'main/products', component: ProductsMainComponent },
  { path: 'main/products/:id', component: MakeorderComponent },
  { path: 'admin/orders', component: OrdersAdminComponent },
  { path: 'admin/orders/:id', component: ChangeorderComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/products/:id', component: ChangeproductComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
