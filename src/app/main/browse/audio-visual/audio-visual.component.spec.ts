import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVisualComponent } from './audio-visual.component';

describe('AudioVisualComponent', () => {
  let component: AudioVisualComponent;
  let fixture: ComponentFixture<AudioVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
