import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudioVisualComponent}  from './audio-visual.component';
import { ProjectorsComponent } from './projectors/projectors.component';
import { ScreensComponent } from './screens/screens.component';
import { CommercialComponent } from './commercial/commercial.component';
import { PresentersComponent } from './presenters/presenters.component';
import { WhiteboardsComponent } from './whiteboards/whiteboards.component';
const routes: Routes = [
  {path: '', component: AudioVisualComponent
},

{path: 'projectors', component: ProjectorsComponent
},

{path: 'commercial', component: CommercialComponent
},

{path: 'presenters', component: PresentersComponent
},

{path: 'screens', component: ScreensComponent
},

{path: 'whiteboards', component: WhiteboardsComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioVisualRoutingModule { }
