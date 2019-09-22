import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProAudioComponent } from './pro-audio.component';
import { AudioVideoComponent } from './audio-video/audio-video.component';
import { ComputerAudioComponent } from './computer-audio/computer-audio.component';
import { MicrophonesComponent } from './microphones/microphones.component';
import { StudioRecordingComponent } from './studio-recording/studio-recording.component';
import { WirelessMicrophoneComponent } from './wireless-microphone/wireless-microphone.component';

const routes: Routes = [
  {path: '', component: ProAudioComponent
},
{
  path: 'audio', component: AudioVideoComponent
},
{
  path: 'computer-audio', component: ComputerAudioComponent
},
{
  path: 'micro', component: MicrophonesComponent
},
{
  path: 'recording', component: StudioRecordingComponent
},
{
  path: 'wireless', component: WirelessMicrophoneComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProAudioRoutingModule { }
