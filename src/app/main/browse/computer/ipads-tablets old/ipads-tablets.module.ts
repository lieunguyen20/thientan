import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpadsTabletsRoutingModule } from './ipads-tablets-routing.module';
import { IpadsTabletsComponent } from './ipads-tablets.component';

@NgModule({
  declarations: [IpadsTabletsComponent],
  imports: [
    CommonModule,
    IpadsTabletsRoutingModule
  ]
})
export class IpadsTabletsModule { }
