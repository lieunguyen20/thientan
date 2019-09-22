import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveillanceComponent } from './surveillance.component';
import { VideoComponent } from './video/video.component';
import { CamerasComponent } from './cameras/cameras.component';
import { HiddenComponent } from './hidden/hidden.component';
import { BodyComponent } from './body/body.component';
import { VehicleComponent } from './vehicle/vehicle.component';
const routes: Routes = [
  {path: '', component: SurveillanceComponent
},
{path: 'video', component:  VideoComponent
},
{path: 'cameras', component: CamerasComponent
},
{path: 'hidden', component: HiddenComponent
},
{path: 'body', component: BodyComponent
},
{path: 'vehicle', component: VehicleComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveillanceRoutingModule { }
