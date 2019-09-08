import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensAccessComponent } from './lens-access.component';

describe('LensAccessComponent', () => {
  let component: LensAccessComponent;
  let fixture: ComponentFixture<LensAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
