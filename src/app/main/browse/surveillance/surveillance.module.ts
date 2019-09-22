import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveillanceRoutingModule } from './surveillance-routing.module';
import { SurveillanceComponent } from './surveillance.component';
import { VideoComponent } from './video/video.component';
import { CamerasComponent } from './cameras/cameras.component';
import { HiddenComponent } from './hidden/hidden.component';
import { BodyComponent } from './body/body.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [SurveillanceComponent, VideoComponent, CamerasComponent, HiddenComponent, BodyComponent, VehicleComponent],
  imports: [
    CommonModule,
    SurveillanceRoutingModule
  ]
})
export class SurveillanceModule { }
