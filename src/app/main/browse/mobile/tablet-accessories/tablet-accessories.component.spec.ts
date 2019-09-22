import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletAccessoriesComponent } from './tablet-accessories.component';

describe('TabletAccessoriesComponent', () => {
  let component: TabletAccessoriesComponent;
  let fixture: ComponentFixture<TabletAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
