import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';

import { BasicLaptopsComponent } from './basic-laptops/basic-laptops.component';

@NgModule({
  declarations: [ BasicLaptopsComponent],
  imports: [
    CommonModule,
    BuyRoutingModule
  ],
  exports: [
    BasicLaptopsComponent
  ]
})
export class BuyModule { }
