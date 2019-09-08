import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLaptopsComponent } from './basic-laptops.component';

describe('BasicLaptopsComponent', () => {
  let component: BasicLaptopsComponent;
  let fixture: ComponentFixture<BasicLaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
