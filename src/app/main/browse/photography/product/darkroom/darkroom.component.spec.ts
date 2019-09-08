import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkroomComponent } from './darkroom.component';

describe('DarkroomComponent', () => {
  let component: DarkroomComponent;
  let fixture: ComponentFixture<DarkroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
