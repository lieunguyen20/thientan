import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

import { LaptopsRoutingModule } from './laptops-routing.module';

@NgModule({
  declarations: [ ProductComponent, ProductsComponent ],
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
