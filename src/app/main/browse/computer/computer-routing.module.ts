import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ComputerComponent} from './computer.component';
import {MacComponent } from './mac/mac.component';
import {IpadsTabletsComponent } from './ipads-tablets/ipads-tablets.component';
import {DesktopsComponent } from './desktops/desktops.component';
import { ComputerComponentsComponent} from './computer-components/computer-components.component';

const routes: Routes = [
  {
    path: '', component: ComputerComponent
  },
  {
    path: 'laptops', loadChildren:  './laptops/laptops.module#LaptopsModule'
  },
  {
    path: 'mac', component:  MacComponent
  },
  {
    path: 'desktop', component:  DesktopsComponent
  },
  {
    path: 'ipads-tablets', component:  IpadsTabletsComponent
  },
  {
    path: 'computer-components', component:  ComputerComponentsComponent
  },
  {
    path     : 'buy',
    loadChildren: './buy/buy.module#BuyModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerRoutingModule { }
