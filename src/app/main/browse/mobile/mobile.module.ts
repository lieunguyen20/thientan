import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { UnlockedComponent } from './unlocked/unlocked.component';
import { IpadsTabletsComponent } from './ipads-tablets/ipads-tablets.component';
import { WearableComponent } from './wearable/wearable.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { TabletAccessoriesComponent } from './tablet-accessories/tablet-accessories.component';

@NgModule({
  declarations: [MobileComponent,UnlockedComponent, IpadsTabletsComponent, WearableComponent, AccessoriesComponent, TabletAccessoriesComponent],
  imports: [
    CommonModule,
    MobileRoutingModule
  ]
})
export class MobileModule { }
