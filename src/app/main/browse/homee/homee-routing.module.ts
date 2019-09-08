import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShopComponent} from './shop/shop.component';
const routes: Routes = [
  {path: 'laptops', component:  ShopComponent
},
 {
   path     : 'buy',
loadChildren: './buy/buy.module#BuyModule'
},

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeeRoutingModule { }
