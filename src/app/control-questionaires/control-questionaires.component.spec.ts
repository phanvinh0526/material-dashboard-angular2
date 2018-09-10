import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlQuestionairesComponent } from './control-questionaires.component';

describe('ControlQuestionairesComponent', () => {
  let component: ControlQuestionairesComponent;
  let fixture: ComponentFixture<ControlQuestionairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlQuestionairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlQuestionairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
