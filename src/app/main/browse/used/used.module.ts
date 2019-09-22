import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsedRoutingModule } from './used-routing.module';
import { UsedComponent } from './used.component';

@NgModule({
  declarations: [UsedComponent],
  imports: [
    CommonModule,
    UsedRoutingModule
  ]
})
export class UsedModule { }
