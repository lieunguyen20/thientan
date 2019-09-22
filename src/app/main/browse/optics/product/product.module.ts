import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BinocularsComponent } from './binoculars/binoculars.component';
import { TelescopesComponent } from './telescopes/telescopes.component';
import { SpottingComponent } from './spotting/spotting.component';
import { RiflescopesComponent } from './riflescopes/riflescopes.component';
import { NightThermalComponent } from './night-thermal/night-thermal.component';

@NgModule({
  declarations: [BinocularsComponent, TelescopesComponent, SpottingComponent, RiflescopesComponent, NightThermalComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
