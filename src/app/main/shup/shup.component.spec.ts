import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShupComponent } from './shup.component';

describe('ShupComponent', () => {
  let component: ShupComponent;
  let fixture: ComponentFixture<ShupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
