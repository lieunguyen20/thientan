import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { UnlockedComponent } from './unlocked/unlocked.component';
import { IpadsTabletsComponent } from './ipads-tablets/ipads-tablets.component';
import { WearableComponent } from './wearable/wearable.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { TabletAccessoriesComponent } from './tablet-accessories/tablet-accessories.component';

const routes: Routes = [
  {path: '', component: MobileComponent

},
{path: 'unclocked', component:  UnlockedComponent
},
{path: 'access', component: AccessoriesComponent
},
{path: 'ipads', component: IpadsTabletsComponent
},
{path: 'tablet', component: TabletAccessoriesComponent
},
{path: 'wearable', component: WearableComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
