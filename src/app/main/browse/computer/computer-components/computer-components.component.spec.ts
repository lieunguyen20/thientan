import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerComponentsComponent } from './computer-components.component';

describe('ComputerComponentsComponent', () => {
  let component: ComputerComponentsComponent;
  let fixture: ComponentFixture<ComputerComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
