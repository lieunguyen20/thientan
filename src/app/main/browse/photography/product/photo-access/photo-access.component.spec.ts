import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAccessComponent } from './photo-access.component';

describe('PhotoAccessComponent', () => {
  let component: PhotoAccessComponent;
  let fixture: ComponentFixture<PhotoAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
