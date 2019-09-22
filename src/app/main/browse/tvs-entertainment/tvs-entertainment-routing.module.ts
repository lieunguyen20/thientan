import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvsEntertainmentComponent } from './tvs-entertainment.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { HomeTheaterProComponent } from './home-theater-pro/home-theater-pro.component';
import { BluRayComponent } from './blu-ray/blu-ray.component';
import { StreamingComponent } from './streaming/streaming.component';
import { GamingComponent } from './gaming/gaming.component';
const routes: Routes = [
  {path: '', component: TvsEntertainmentComponent
},
{
  path: 'television', component: TelevisionsComponent
},
{
  path: 'theater', component: HomeTheaterProComponent
},
{
  path: 'streaming', component: StreamingComponent
},
{
  path: 'blu-ray', component: BluRayComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvsEntertainmentRoutingModule { }
