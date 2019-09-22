import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialsRoutingModule } from './specials-routing.module';
import { SpecialsComponent } from './specials.component';

import { ImacComponent } from './imac/imac.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { PortableComponent } from './portable/portable.component';
@NgModule({
  declarations: [SpecialsComponent,ImacComponent, LenovoComponent, PortableComponent],
  imports: [
    CommonModule,
    SpecialsRoutingModule
  ]
})
export class SpecialsModule { }
