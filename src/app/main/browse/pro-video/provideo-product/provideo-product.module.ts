import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvideoProductRoutingModule } from './provideo-product-routing.module';
import { ProfessionalComponent } from '../professional/professional.component';
import { DegitalCineComponent } from '../degital-cine/degital-cine.component';
import { IndustrialComponent } from '../industrial/industrial.component';
import { PtzCamerasComponent } from '../ptz-cameras/ptz-cameras.component';
import { StudioEfpComponent } from '../studio-efp/studio-efp.component';

@NgModule({
  declarations: [ProfessionalComponent, DegitalCineComponent, IndustrialComponent, PtzCamerasComponent, StudioEfpComponent],
  imports: [
    CommonModule,
    ProvideoProductRoutingModule
  ]
})
export class ProvideoProductModule { }
