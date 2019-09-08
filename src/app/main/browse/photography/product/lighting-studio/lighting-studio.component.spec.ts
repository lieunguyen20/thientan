import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingStudioComponent } from './lighting-studio.component';

describe('LightingStudioComponent', () => {
  let component: LightingStudioComponent;
  let fixture: ComponentFixture<LightingStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
