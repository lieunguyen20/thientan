import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinousComponent } from './continous.component';

describe('ContinousComponent', () => {
  let component: ContinousComponent;
  let fixture: ComponentFixture<ContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
