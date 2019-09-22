import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessCamerasComponent } from './wireless-cameras.component';

describe('WirelessCamerasComponent', () => {
  let component: WirelessCamerasComponent;
  let fixture: ComponentFixture<WirelessCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirelessCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
