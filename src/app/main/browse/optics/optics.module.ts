import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpticsRoutingModule } from './optics-routing.module';
import { OpticsComponent } from './optics.component';
import { BinocularsComponent } from './binoculars/binoculars.component';
import { TelescopesComponent } from './telescopes/telescopes.component';
import { SpottingComponent } from './spotting/spotting.component';
import { SightsComponent } from './sights/sights.component';
import { NightComponent } from './night/night.component';

@NgModule({
  declarations: [OpticsComponent, BinocularsComponent, TelescopesComponent, SpottingComponent, SightsComponent, NightComponent],
  imports: [
    CommonModule,
    OpticsRoutingModule
  ]
})
export class OpticsModule { }
