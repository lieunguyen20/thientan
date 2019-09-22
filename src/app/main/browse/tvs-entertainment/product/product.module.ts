import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { TelevisionsComponent } from './televisions/televisions.component';
import { HomeTheaterProComponent } from './home-theater-pro/home-theater-pro.component';
import { BluRayComponent } from './blu-ray/blu-ray.component';
import { StreamingComponent } from './streaming/streaming.component';
import { GamingComponent } from './gaming/gaming.component';

@NgModule({
  declarations: [TelevisionsComponent, HomeTheaterProComponent, BluRayComponent, StreamingComponent, GamingComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
