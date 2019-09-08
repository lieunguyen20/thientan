import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAdvantageComponent } from './edu-advantage.component';

describe('EduAdvantageComponent', () => {
  let component: EduAdvantageComponent;
  let fixture: ComponentFixture<EduAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
