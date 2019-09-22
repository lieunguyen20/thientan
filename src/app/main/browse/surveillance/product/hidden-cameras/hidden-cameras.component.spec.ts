import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenCamerasComponent } from './hidden-cameras.component';

describe('HiddenCamerasComponent', () => {
  let component: HiddenCamerasComponent;
  let fixture: ComponentFixture<HiddenCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
