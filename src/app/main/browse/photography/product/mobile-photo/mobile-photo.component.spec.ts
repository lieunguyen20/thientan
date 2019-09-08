import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhotoComponent } from './mobile-photo.component';

describe('MobilePhotoComponent', () => {
  let component: MobilePhotoComponent;
  let fixture: ComponentFixture<MobilePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
