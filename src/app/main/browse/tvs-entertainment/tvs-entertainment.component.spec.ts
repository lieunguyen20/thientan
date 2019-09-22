import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsEntertainmentComponent } from './tvs-entertainment.component';

describe('TvsEntertainmentComponent', () => {
  let component: TvsEntertainmentComponent;
  let fixture: ComponentFixture<TvsEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
