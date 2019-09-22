import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsedComponent } from './used.component';

const routes: Routes = [
  
  {path: '', component: UsedComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsedRoutingModule { }
