import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopsRoutingModule } from './desktops-routing.module';
import { DesktopsComponent } from './desktops.component';

@NgModule({
  declarations: [DesktopsComponent],
  imports: [
    CommonModule,
    DesktopsRoutingModule
  ]
})
export class DesktopsModule { }
