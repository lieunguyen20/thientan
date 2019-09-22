import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamcordersRoutingModule } from './camcorders-routing.module';
import { CamcordersComponent } from './camcorders.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ActionComponent } from './action/action.component';
import { ProfessionalComponent } from './professional/professional.component';
import { DronesComponent } from './drones/drones.component';

@NgModule({
  declarations: [CamcordersComponent, ConsumerComponent, ActionComponent, ProfessionalComponent, DronesComponent],
  imports: [
    CommonModule,
    CamcordersRoutingModule
  ]
})
export class CamcordersModule { }
