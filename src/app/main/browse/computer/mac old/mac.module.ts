import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacRoutingModule } from './mac-routing.module';
import { MacComponent } from './mac.component';

@NgModule({
  declarations: [MacComponent],
  imports: [
    CommonModule,
    MacRoutingModule
  ]
})
export class MacModule { }
