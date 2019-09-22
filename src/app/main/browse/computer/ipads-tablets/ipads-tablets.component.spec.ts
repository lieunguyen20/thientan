import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadsTabletsComponent } from './ipads-tablets.component';

describe('IpadsTabletsComponent', () => {
  let component: IpadsTabletsComponent;
  let fixture: ComponentFixture<IpadsTabletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadsTabletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadsTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
