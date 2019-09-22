import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamcordersComponent } from './camcorders.component';

describe('CamcordersComponent', () => {
  let component: CamcordersComponent;
  let fixture: ComponentFixture<CamcordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamcordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamcordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
