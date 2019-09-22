import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpottingComponent } from './spotting.component';

describe('SpottingComponent', () => {
  let component: SpottingComponent;
  let fixture: ComponentFixture<SpottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpottingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
