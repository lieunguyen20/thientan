import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandsMountingComponent } from './stands-mounting.component';

describe('StandsMountingComponent', () => {
  let component: StandsMountingComponent;
  let fixture: ComponentFixture<StandsMountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandsMountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandsMountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
