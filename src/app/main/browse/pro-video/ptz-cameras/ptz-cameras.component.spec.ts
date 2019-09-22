import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtzCamerasComponent } from './ptz-cameras.component';

describe('PtzCamerasComponent', () => {
  let component: PtzCamerasComponent;
  let fixture: ComponentFixture<PtzCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtzCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtzCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
