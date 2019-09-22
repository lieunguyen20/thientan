import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegitalCineComponent } from './degital-cine.component';

describe('DegitalCineComponent', () => {
  let component: DegitalCineComponent;
  let fixture: ComponentFixture<DegitalCineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegitalCineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegitalCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
