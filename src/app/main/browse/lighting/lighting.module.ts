import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightingRoutingModule } from './lighting-routing.module';
import { LightingComponent } from './lighting.component';
import {ContinousComponent} from './continous/continous.component';

import { FlashesComponent } from './flashes/flashes.component';
import { ModiflersComponent } from './modiflers/modiflers.component';
import { StandsMountingComponent } from './stands-mounting/stands-mounting.component';
import { StrobeComponent } from './strobe/strobe.component';
@NgModule({
  declarations: [LightingComponent,ContinousComponent, FlashesComponent, ModiflersComponent, StandsMountingComponent, StrobeComponent],
  imports: [
    CommonModule,
    LightingRoutingModule
  ]
})
export class LightingModule { }
