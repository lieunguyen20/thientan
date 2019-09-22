import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialsComponent } from './specials.component';
import { ImacComponent } from './imac/imac.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { PortableComponent } from './portable/portable.component';
const routes: Routes = [
  
  {path: '', component: SpecialsComponent
},

{path: 'imac', component: ImacComponent
},
{path: 'lenovo', component: LenovoComponent
},
{path: 'portable', component: PortableComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialsRoutingModule { }
