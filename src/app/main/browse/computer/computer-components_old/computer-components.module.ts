import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerComponentsRoutingModule } from './computer-components-routing.module';
import { ComputerComponentsComponent } from './computer-components.component';

@NgModule({
  declarations: [ComputerComponentsComponent],
  imports: [
    CommonModule,
    ComputerComponentsRoutingModule
  ]
})
export class ComputerComponentsModule { }
