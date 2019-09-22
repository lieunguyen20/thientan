import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalCameraComponent } from './digital-camera/digital-camera.component';
import { BagsCasesComponent} from './bags-cases/bags-cases.component';
import {LensesComponent} from './lenses/lenses.component';
import {DronesAerialComponent} from './drones-aerial/drones-aerial.component';
import{TripodsComponent} from './tripods/tripods.component';
 import{ BookTutorialsComponent} from  './book-tutorials/book-tutorials.component';
import {BatteriesComponent} from './batteries/batteries.component';
import {DarkroomComponent } from './darkroom/darkroom.component';
import {FilmComponent} from './film/film.component';
import {FilmCamerasComponent} from './film-cameras/film-cameras.component';
import {FlashesComponent} from './flashes/flashes.component';
import {LensAccessComponent} from './lens-access/lens-access.component';
import {LensFiltersComponent} from './lens-filters/lens-filters.component';
import {LightingStudioComponent} from './lighting-studio/lighting-studio.component';
import {MediumComponent} from './medium/medium.component';
import {MemoryCardsComponent} from './memory-cards/memory-cards.component';
import {MobilePhotoComponent} from './mobile-photo/mobile-photo.component';
import {PhotoAccessComponent} from './photo-access/photo-access.component';
import {PhotoPrintersComponent} from './photo-printers/photo-printers.component';
import {PresentationComponent} from './presentation/presentation.component';
import {ScannersComponent} from './scanners/scanners.component';
import {SoftwareComponent} from './software/software.component';
import {UnderwaterComponent} from './underwater/underwater.component';


const routes: Routes = [
  
  {
    path: 'digital-camera', 
  component : DigitalCameraComponent
},
{
  path: 'lenses', 
component : LensesComponent
},
{
  path: 'drones-aerial', 
component : DronesAerialComponent
},
{
  path: 'tripods', 
component : TripodsComponent
},
{
  path: 'bags-cases', 
component : BagsCasesComponent
},
{
  path: 'memory', 
component : MemoryCardsComponent
},
{
  path: 'batteries', 
component : BatteriesComponent
},
{
  path: 'book-tutorials', 
component : BookTutorialsComponent
},
{
  path: 'darkroom', 
component : DarkroomComponent
},
{
  path: 'film', 
component : FilmComponent
},
{
  path: 'film-cameras', 
component : FilmCamerasComponent
},
{
  path: 'flashes', 
component : FlashesComponent
},
{
  path: 'lens-access', 
component : LensAccessComponent
},
{
  path: 'lens-filters', 
component : LensFiltersComponent
},
{
  path: 'lighting-studio', 
component : LightingStudioComponent
},
{
  path: 'medium', 
component : MediumComponent
},
{
  path: 'mobile-photo', 
component : MobilePhotoComponent
},
{
  path: 'photo-access', 
component : PhotoAccessComponent
},
{
  path: 'photo-printers', 
component : PhotoPrintersComponent
},
{
  path: 'presentation', 
component : PresentationComponent
},
{
  path: 'scanners', 
component : ScannersComponent
},
{
  path: 'softwares', 
component : SoftwareComponent
},

{
  path: 'underwater', 
component : UnderwaterComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
