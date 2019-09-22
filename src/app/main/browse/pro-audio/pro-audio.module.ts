import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProAudioRoutingModule } from './pro-audio-routing.module';
import { ProAudioComponent } from './pro-audio.component';
import { AudioVideoComponent } from './audio-video/audio-video.component';
import { ComputerAudioComponent } from './computer-audio/computer-audio.component';
import { MicrophonesComponent } from './microphones/microphones.component';
import { StudioRecordingComponent } from './studio-recording/studio-recording.component';
import { WirelessMicrophoneComponent } from './wireless-microphone/wireless-microphone.component';

@NgModule({
  declarations: [ProAudioComponent,AudioVideoComponent, ComputerAudioComponent, MicrophonesComponent, StudioRecordingComponent, WirelessMicrophoneComponent],
  imports: [
    CommonModule,
    ProAudioRoutingModule
  ]
})
export class ProAudioModule {  }
