import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalMarketplaceComponent } from './federal-marketplace.component';

describe('FederalMarketplaceComponent', () => {
  let component: FederalMarketplaceComponent;
  let fixture: ComponentFixture<FederalMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
