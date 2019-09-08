import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowseRoutingModule } from './browse-routing.module';
import { ComputerComponent } from './computer/computer.component';
import { ShopComponent } from './homee/shop/shop.component';
import { LaptopsComponent } from './computer/laptops/laptops.component';
import { ProductsComponent } from './computer/laptops/products/products.component';
import { ProductComponent } from './computer/laptops/product/product.component';
import { ShootLandscapeComponent } from './shoot-landscape/shoot-landscape.component';
import { ExpertsProfilesComponent } from './experts-profiles/experts-profiles.component';
import { FederalMarketplaceComponent } from './federal-marketplace/federal-marketplace.component';
import { EduAdvantageComponent } from './edu-advantage/edu-advantage.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [ComputerComponent, LaptopsComponent, ShootLandscapeComponent, ExpertsProfilesComponent, FederalMarketplaceComponent, EduAdvantageComponent, HelpCenterComponent, AboutUsComponent],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ],
  exports: [
    ComputerComponent, LaptopsComponent,ShootLandscapeComponent
  ]
})
export class BrowseModule { }
