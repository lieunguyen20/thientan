import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTheaterProComponent } from './home-theater-pro.component';

describe('HomeTheaterProComponent', () => {
  let component: HomeTheaterProComponent;
  let fixture: ComponentFixture<HomeTheaterProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTheaterProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTheaterProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
