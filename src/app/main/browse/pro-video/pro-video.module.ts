import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProVideoRoutingModule } from './pro-video-routing.module';
import { ProVideoComponent } from './pro-video.component';
import {ProfessionalComponent} from './professional/professional.component';
import {DegitalCineComponent} from './degital-cine/degital-cine.component';
import {IndustrialComponent} from './industrial/industrial.component';
import {PtzCamerasComponent} from './ptz-cameras/ptz-cameras.component';
import {StudioEfpComponent} from './studio-efp/studio-efp.component';

@NgModule({
  declarations: [ProVideoComponent,ProfessionalComponent, DegitalCineComponent, IndustrialComponent, PtzCamerasComponent, StudioEfpComponent],
  imports: [
    CommonModule,
    ProVideoRoutingModule
  ]
})
export class ProVideoModule { }
