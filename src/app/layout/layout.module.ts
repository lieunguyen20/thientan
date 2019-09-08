import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from 'app/layout/vertical/layout-1/layout-1.module';
import { VerticalLayout2Module } from 'app/layout/vertical/layout-2/layout-2.module';
import { VerticalLayout3Module } from 'app/layout/vertical/layout-3/layout-3.module';

import { HorizontalLayout1Module } from 'app/layout/horizontal/layout-1/layout-1.module';
import {HomeLayoutModule} from 'app/layout/home-layout/home-layout.module';
import { HomeModule } from 'app/main/home/home.module';

@NgModule({
    imports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module,

        HomeLayoutModule
    ],
    exports: [
        VerticalLayout1Module,
        VerticalLayout2Module,
        VerticalLayout3Module,

        HorizontalLayout1Module,

        HomeLayoutModule
    ]
})
export class LayoutModule
{
}
