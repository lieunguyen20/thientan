import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DigitalCameraComponent } from './digital-camera/digital-camera.component';
import { LensesComponent } from './lenses/lenses.component';
import { DronesAerialComponent } from './drones-aerial/drones-aerial.component';
import { TripodsComponent } from './tripods/tripods.component';
import { BagsCasesComponent } from './bags-cases/bags-cases.component';
import { MemoryCardsComponent } from './memory-cards/memory-cards.component';
import { BatteriesComponent } from './batteries/batteries.component';
import { FlashesComponent } from './flashes/flashes.component';
import { LensFiltersComponent } from './lens-filters/lens-filters.component';
import { LensAccessComponent } from './lens-access/lens-access.component';
import { PhotoAccessComponent } from './photo-access/photo-access.component';
import { MediumComponent } from './medium/medium.component';
import { FilmCamerasComponent } from './film-cameras/film-cameras.component';
import { FilmComponent } from './film/film.component';
import { MobilePhotoComponent } from './mobile-photo/mobile-photo.component';
import { LightingStudioComponent } from './lighting-studio/lighting-studio.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { DarkroomComponent } from './darkroom/darkroom.component';
import { SoftwareComponent } from './software/software.component';
import { BookTutorialsComponent } from './book-tutorials/book-tutorials.component';
import { ScannersComponent } from './scanners/scanners.component';
import { PhotoPrintersComponent } from './photo-printers/photo-printers.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  declarations: [DigitalCameraComponent, LensesComponent, DronesAerialComponent, TripodsComponent, BagsCasesComponent, MemoryCardsComponent, BatteriesComponent, FlashesComponent, LensFiltersComponent, LensAccessComponent, PhotoAccessComponent, MediumComponent, FilmCamerasComponent, FilmComponent, MobilePhotoComponent, LightingStudioComponent, UnderwaterComponent, DarkroomComponent, SoftwareComponent, BookTutorialsComponent, ScannersComponent, PhotoPrintersComponent, PresentationComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    DigitalCameraComponent, LensesComponent, DronesAerialComponent, TripodsComponent, BagsCasesComponent
  ]
})
export class ProductModule { }
