import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsProfilesComponent } from './experts-profiles.component';

describe('ExpertsProfilesComponent', () => {
  let component: ExpertsProfilesComponent;
  let fixture: ComponentFixture<ExpertsProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
