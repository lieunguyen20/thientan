import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightProductRoutingModule } from './light-product-routing.module';
import { ContinousComponent } from '../continous/continous.component';
import { FlashesComponent } from '../flashes/flashes.component';
import { ModiflersComponent } from '../modiflers/modiflers.component';
import { StandsMountingComponent } from '../stands-mounting/stands-mounting.component';
import { StrobeComponent } from '../strobe/strobe.component';

@NgModule({
  declarations: [ContinousComponent, FlashesComponent, ModiflersComponent, StandsMountingComponent, StrobeComponent],
  imports: [
    CommonModule,
    LightProductRoutingModule
  ]
})
export class LightProductModule { }
