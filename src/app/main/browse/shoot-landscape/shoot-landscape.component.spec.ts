import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootLandscapeComponent } from './shoot-landscape.component';

describe('ShootLandscapeComponent', () => {
  let component: ShootLandscapeComponent;
  let fixture: ComponentFixture<ShootLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
