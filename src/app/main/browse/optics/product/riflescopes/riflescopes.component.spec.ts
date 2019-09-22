import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiflescopesComponent } from './riflescopes.component';

describe('RiflescopesComponent', () => {
  let component: RiflescopesComponent;
  let fixture: ComponentFixture<RiflescopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiflescopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiflescopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
