import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectorsComponent } from './projectors.component';

describe('ProjectorsComponent', () => {
  let component: ProjectorsComponent;
  let fixture: ComponentFixture<ProjectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
