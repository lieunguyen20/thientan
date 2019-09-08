import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { LaptopsComponent } from './laptops/laptops.component';
import { BasicLaptopsComponent } from './basic-laptops/basic-laptops.component';

@NgModule({
  declarations: [LaptopsComponent, BasicLaptopsComponent],
  imports: [
    CommonModule,
    BuyRoutingModule
  ],
  exports: [
    LaptopsComponent, BasicLaptopsComponent
  ]
})
export class BuyModule { }
