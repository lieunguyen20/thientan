import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShootLandscapeComponent} from './shoot-landscape/shoot-landscape.component';
import {ExpertsProfilesComponent} from './experts-profiles/experts-profiles.component';
import {FederalMarketplaceComponent} from './federal-marketplace/federal-marketplace.component';
import {EduAdvantageComponent} from './edu-advantage/edu-advantage.component';
import {HelpCenterComponent} from './help-center/help-center.component';
import {AboutUsComponent} from './about-us/about-us.component';


const routes: Routes = [
  // {
  //   path: 'computer', component: ComputerComponent
  // },
  {
    path: 'computer', 
    loadChildren: './computer/computer.module#ComputerModule'
  },

  {
    path: 'landscape', component: ShootLandscapeComponent
  },
//  {
//   path     : 'home',
//   loadChildren: './homee/homee.module#HomeeModule'

//   },
  // {
  //   path: 'laptops',
  //   loadChildren: './computer/laptops/laptops.module#LaptopsModule'
  // },
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
  {
    path: 'pro-video', loadChildren: './pro-video/pro-video.module#ProVideoModule'
  },
  {
    path: 'lighting', loadChildren: './lighting/lighting.module#LightingModule'
  },
  {
    path: 'pro-audio', loadChildren: './pro-audio/pro-audio.module#ProAudioModule'
  },
  {
    path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule'
  },
  {
    path: 'tvs', loadChildren: './tvs-entertainment/tvs-entertainment.module#TvsEntertainmentModule'
  },
  {
    path: 'camcorders',loadChildren: './camcorders/camcorders.module#CamcordersModule'
  },
  {
    path: 'surveillance', loadChildren: './surveillance/surveillance.module#SurveillanceModule'
  },
  {
    path: 'optics',loadChildren: './optics/optics.module#OpticsModule'
  },
  {
    path: 'audio-visual', loadChildren: './audio-visual/audio-visual.module#AudioVisualModule'
  },
  {
    path: 'used', loadChildren: './used/used.module#UsedModule'
  },
  {
    path: 'specials', loadChildren: './specials/specials.module#SpecialsModule'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
