import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioRecordingComponent } from './studio-recording.component';

describe('StudioRecordingComponent', () => {
  let component: StudioRecordingComponent;
  let fixture: ComponentFixture<StudioRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
