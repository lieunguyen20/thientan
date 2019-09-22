import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioVisualRoutingModule } from './audio-visual-routing.module';
import { AudioVisualComponent } from './audio-visual.component';
import { ProjectorsComponent } from './projectors/projectors.component';
import { ScreensComponent } from './screens/screens.component';
import { CommercialComponent } from './commercial/commercial.component';
import { PresentersComponent } from './presenters/presenters.component';
import { WhiteboardsComponent } from './whiteboards/whiteboards.component';

@NgModule({
  declarations: [AudioVisualComponent, ProjectorsComponent, ScreensComponent, CommercialComponent, PresentersComponent, WhiteboardsComponent],
  imports: [
    CommonModule,
    AudioVisualRoutingModule
  ]
})
export class AudioVisualModule { }
