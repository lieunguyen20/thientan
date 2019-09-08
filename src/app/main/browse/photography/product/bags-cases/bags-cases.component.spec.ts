import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsCasesComponent } from './bags-cases.component';

describe('BagsCasesComponent', () => {
  let component: BagsCasesComponent;
  let fixture: ComponentFixture<BagsCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
