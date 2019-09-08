import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { HomeModule } from 'app/main/home/home.module';
import { BrowseModule } from 'app/main/browse/browse.module';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
   

    CommonModule,
    HomeModule,
    BrowseModule
   
  ],
  exports: [
    HomeLayoutComponent
  ]
})
export class HomeLayoutModule { }
