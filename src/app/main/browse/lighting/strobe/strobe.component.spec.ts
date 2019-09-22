import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrobeComponent } from './strobe.component';

describe('StrobeComponent', () => {
  let component: StrobeComponent;
  let fixture: ComponentFixture<StrobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
