import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCamerasComponent } from './film-cameras.component';

describe('FilmCamerasComponent', () => {
  let component: FilmCamerasComponent;
  let fixture: ComponentFixture<FilmCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
