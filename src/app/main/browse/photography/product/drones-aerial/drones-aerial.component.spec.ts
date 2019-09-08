import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesAerialComponent } from './drones-aerial.component';

describe('DronesAerialComponent', () => {
  let component: DronesAerialComponent;
  let fixture: ComponentFixture<DronesAerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronesAerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesAerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
