import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizquestionsComponent } from './quizquestions.component';

describe('QuizquestionsComponent', () => {
  let component: QuizquestionsComponent;
  let fixture: ComponentFixture<QuizquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizquestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
