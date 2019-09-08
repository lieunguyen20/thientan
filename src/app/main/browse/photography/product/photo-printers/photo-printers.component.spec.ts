import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPrintersComponent } from './photo-printers.component';

describe('PhotoPrintersComponent', () => {
  let component: PhotoPrintersComponent;
  let fixture: ComponentFixture<PhotoPrintersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPrintersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
