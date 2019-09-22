import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiflersComponent } from './modiflers.component';

describe('ModiflersComponent', () => {
  let component: ModiflersComponent;
  let fixture: ComponentFixture<ModiflersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiflersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiflersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
