import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAudioComponent } from './pro-audio.component';

describe('ProAudioComponent', () => {
  let component: ProAudioComponent;
  let fixture: ComponentFixture<ProAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
