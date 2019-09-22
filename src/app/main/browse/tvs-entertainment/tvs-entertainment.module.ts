import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvsEntertainmentRoutingModule } from './tvs-entertainment-routing.module';
import { TvsEntertainmentComponent } from './tvs-entertainment.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { HomeTheaterProComponent } from './home-theater-pro/home-theater-pro.component';
import { BluRayComponent } from './blu-ray/blu-ray.component';
import { StreamingComponent } from './streaming/streaming.component';
import { GamingComponent } from './gaming/gaming.component';

@NgModule({
  declarations: [TvsEntertainmentComponent,TelevisionsComponent, HomeTheaterProComponent, BluRayComponent, StreamingComponent, GamingComponent],
  imports: [
    CommonModule,
    TvsEntertainmentRoutingModule
  ]
})
export class TvsEntertainmentModule { }
