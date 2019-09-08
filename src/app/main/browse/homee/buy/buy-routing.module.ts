import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicLaptopsComponent} from './basic-laptops/basic-laptops.component'
const routes: Routes = [
  {
    path     : 'basic-laptops',
    component : BasicLaptopsComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
