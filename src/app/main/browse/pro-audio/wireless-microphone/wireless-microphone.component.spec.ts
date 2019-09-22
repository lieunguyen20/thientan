import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessMicrophoneComponent } from './wireless-microphone.component';

describe('WirelessMicrophoneComponent', () => {
  let component: WirelessMicrophoneComponent;
  let fixture: ComponentFixture<WirelessMicrophoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirelessMicrophoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessMicrophoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
