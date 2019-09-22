import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCamerasComponent } from './body-cameras.component';

describe('BodyCamerasComponent', () => {
  let component: BodyCamerasComponent;
  let fixture: ComponentFixture<BodyCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
