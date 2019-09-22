import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { VideoComponent } from './video/video.component';
import { WirelessCamerasComponent } from './wireless-cameras/wireless-cameras.component';
import { HiddenCamerasComponent } from './hidden-cameras/hidden-cameras.component';
import { BodyCamerasComponent } from './body-cameras/body-cameras.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [VideoComponent, WirelessCamerasComponent, HiddenCamerasComponent, BodyCamerasComponent, VehicleComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
