import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProVideoComponent } from './pro-video.component';

describe('ProVideoComponent', () => {
  let component: ProVideoComponent;
  let fixture: ComponentFixture<ProVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
