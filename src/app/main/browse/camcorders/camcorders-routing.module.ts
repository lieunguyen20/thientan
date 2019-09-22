import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CamcordersComponent} from './camcorders.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ActionComponent } from './action/action.component';
import { ProfessionalComponent } from './professional/professional.component';
import { DronesComponent } from './drones/drones.component';

const routes: Routes = [
  {path: '', component: CamcordersComponent
},
{
  path: 'consumer', component: ConsumerComponent
},
{
  path: 'action', component: ActionComponent
},
{
  path: 'pro', component: ProfessionalComponent
},
{
  path: 'drones', component: DronesComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamcordersRoutingModule { }
