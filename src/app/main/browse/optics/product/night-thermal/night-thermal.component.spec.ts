import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightThermalComponent } from './night-thermal.component';

describe('NightThermalComponent', () => {
  let component: NightThermalComponent;
  let fixture: ComponentFixture<NightThermalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightThermalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightThermalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
