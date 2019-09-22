import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContinousComponent} from '../continous/continous.component';
import {FlashesComponent} from '../flashes/flashes.component';
import {ModiflersComponent} from '../modiflers/modiflers.component';
import {StandsMountingComponent} from '../stands-mounting/stands-mounting.component';
import {StrobeComponent} from '../strobe/strobe.component';



const routes: Routes = [
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightProductRoutingModule { }
