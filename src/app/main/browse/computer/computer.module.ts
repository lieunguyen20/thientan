import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerRoutingModule } from './computer-routing.module';
import { ComputerComponent } from './computer.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { ShopComponent } from './shop/shop.component';
import { MacComponent } from './mac/mac.component';
import { DesktopsComponent } from './desktops/desktops.component';
import { IpadsTabletsComponent } from './ipads-tablets/ipads-tablets.component';
import { ComputerComponentsComponent } from './computer-components/computer-components.component';



@NgModule({
  declarations: [ShopComponent,ComputerComponent, MacComponent, DesktopsComponent, IpadsTabletsComponent, ComputerComponentsComponent],
  imports: [
    CommonModule,
    ComputerRoutingModule
  ]
})
export class ComputerModule { }