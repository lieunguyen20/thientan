import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ImacComponent } from './imac/imac.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { PortableComponent } from './portable/portable.component';

@NgModule({
  declarations: [ImacComponent, LenovoComponent, PortableComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
