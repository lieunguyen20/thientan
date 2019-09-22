import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioEfpComponent } from './studio-efp.component';

describe('StudioEfpComponent', () => {
  let component: StudioEfpComponent;
  let fixture: ComponentFixture<StudioEfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioEfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioEfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
