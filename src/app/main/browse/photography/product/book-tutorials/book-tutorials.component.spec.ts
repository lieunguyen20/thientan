import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTutorialsComponent } from './book-tutorials.component';

describe('BookTutorialsComponent', () => {
  let component: BookTutorialsComponent;
  let fixture: ComponentFixture<BookTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
