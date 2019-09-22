import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpticsComponent } from './optics.component';
import { BinocularsComponent } from './binoculars/binoculars.component';
import { TelescopesComponent } from './telescopes/telescopes.component';
import { SpottingComponent } from './spotting/spotting.component';
import { SightsComponent } from './sights/sights.component';
import { NightComponent } from './night/night.component';

const routes: Routes = [
  {path: '', component: OpticsComponent
},

{path: 'binoculars', component:  BinocularsComponent
},
{path: 'night', component: NightComponent
},
{path: 'sights', component: SightsComponent
},
{path: 'spotting', component: SpottingComponent
},
{path: 'telescopes', component: TelescopesComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpticsRoutingModule { }
