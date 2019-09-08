import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePhotographyComponent } from './browse-photography.component';

describe('BrowsePhotographyComponent', () => {
  let component: BrowsePhotographyComponent;
  let fixture: ComponentFixture<BrowsePhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
