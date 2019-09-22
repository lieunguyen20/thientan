import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightingComponent } from './lighting.component';
import {ContinousComponent} from './continous/continous.component';

import {FlashesComponent} from './flashes/flashes.component';
import {ModiflersComponent} from './modiflers/modiflers.component';
import {StandsMountingComponent} from './stands-mounting/stands-mounting.component';
import {StrobeComponent} from './strobe/strobe.component';

const routes: Routes = [ 
  {path: '', component: LightingComponent
},
{path: 'continous', component: ContinousComponent
},
{path: 'flashes', component: FlashesComponent
},
{path: 'modiflers', component: ModiflersComponent
},
{path: 'stands', component: StandsMountingComponent
},
{path: 'strobe', component: StrobeComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightingRoutingModule { }
