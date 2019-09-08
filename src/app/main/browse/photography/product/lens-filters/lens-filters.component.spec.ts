import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensFiltersComponent } from './lens-filters.component';

describe('LensFiltersComponent', () => {
  let component: LensFiltersComponent;
  let fixture: ComponentFixture<LensFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
