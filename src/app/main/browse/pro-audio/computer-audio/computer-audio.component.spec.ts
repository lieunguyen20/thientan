import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerAudioComponent } from './computer-audio.component';

describe('ComputerAudioComponent', () => {
  let component: ComputerAudioComponent;
  let fixture: ComponentFixture<ComputerAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
