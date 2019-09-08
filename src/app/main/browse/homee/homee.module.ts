import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeeRoutingModule } from './homee-routing.module';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    HomeeRoutingModule
  ],
  exports: [
    ShopComponent
  ]
})
export class HomeeModule { }
