import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripodsComponent } from './tripods.component';

describe('TripodsComponent', () => {
  let component: TripodsComponent;
  let fixture: ComponentFixture<TripodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
