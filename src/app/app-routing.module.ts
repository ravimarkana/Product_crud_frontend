import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { MainComponent } from './main/main.component';
import { SaleComponent } from './user/sale/sale.component';
import { UserComponent } from './user/user.component';
import { OneComponent } from './user/one/one.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'user', component: UserComponent,
    children: [
      {
        path: 'sale', component: SaleComponent
      },
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'products/create', component: ProductCreateComponent
      },
      {
        path: 'products/:id/edit', component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
