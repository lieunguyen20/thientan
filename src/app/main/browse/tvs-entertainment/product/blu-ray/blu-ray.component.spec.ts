import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluRayComponent } from './blu-ray.component';

describe('BluRayComponent', () => {
  let component: BluRayComponent;
  let fixture: ComponentFixture<BluRayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluRayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluRayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
