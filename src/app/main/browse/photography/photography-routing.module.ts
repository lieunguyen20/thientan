import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PhotographyComponent } from './photography.component';


const routes: Routes = [
 

{ path: '', component: PhotographyComponent},
        

  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyRoutingModule { }
