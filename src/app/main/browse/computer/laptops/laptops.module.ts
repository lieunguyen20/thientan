import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

import { LaptopsRoutingModule } from './laptops-routing.module';
import {LaptopsComponent} from './laptops.component';

@NgModule({
  declarations: [ ProductComponent, ProductsComponent ,LaptopsComponent],
  imports: [
    CommonModule,
    LaptopsRoutingModule
  ],
  exports: [
    ProductComponent,
    ProductsComponent
  ]
})
export class LaptopsModule { }
