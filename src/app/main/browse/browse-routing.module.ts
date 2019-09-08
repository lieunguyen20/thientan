import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './homee/shop/shop.component';
import {  ComputerComponent } from './computer/computer.component';
import { LaptopsComponent } from './computer/laptops/laptops.component';
import { ProductsComponent } from './computer/laptops/products/products.component';
import { ProductComponent } from './computer/laptops/product/product.component';
import { PhotographyComponent } from './photography/photography.component';
import {ShootLandscapeComponent} from './shoot-landscape/shoot-landscape.component';
import {ExpertsProfilesComponent} from './experts-profiles/experts-profiles.component';
import {FederalMarketplaceComponent} from './federal-marketplace/federal-marketplace.component';
import {EduAdvantageComponent} from './edu-advantage/edu-advantage.component';
import {HelpCenterComponent} from './help-center/help-center.component';
import {AboutUsComponent} from './about-us/about-us.component';
const routes: Routes = [
  {
    path: 'computer', component: ComputerComponent
},

{
  path: 'landscape', component: ShootLandscapeComponent
},
 {
  path     : 'home',
  loadChildren: './homee/homee.module#HomeeModule'

  },
  {
    path: 'laptops',
    loadChildren: './computer/laptops/laptops.module#LaptopsModule'
  },
  {
    path: 'photography', 
  loadChildren: './photography/photography.module#PhotographyModule'
},
{
  path: 'experts', component: ExpertsProfilesComponent
},
{
  path: 'federal', component: FederalMarketplaceComponent
},
{
  path: 'edu-advantage', component: EduAdvantageComponent
},
{
  path: 'help', component: HelpCenterComponent
},
{
  path: 'about-us', component: AboutUsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
