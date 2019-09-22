import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProVideoComponent} from './pro-video.component';
import {ProfessionalComponent} from './professional/professional.component';
import {DegitalCineComponent} from './degital-cine/degital-cine.component';
import {IndustrialComponent} from './industrial/industrial.component';
import {PtzCamerasComponent} from './ptz-cameras/ptz-cameras.component';
import {StudioEfpComponent} from './studio-efp/studio-efp.component';
const routes: Routes = [
  {path: '', component: ProVideoComponent
},
{path: 'pro-camcorders', component: ProfessionalComponent
},
{path: 'efp', component: StudioEfpComponent
},
{path: 'ptz', component: PtzCamerasComponent
},
{path: 'industrial', component: IndustrialComponent
},
{path: 'degital', component: DegitalCineComponent
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProVideoRoutingModule { }
