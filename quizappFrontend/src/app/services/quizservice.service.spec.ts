import { TestBed } from '@angular/core/testing';

import { QuizserviceService } from './quizservice.service';

describe('QuizserviceService', () => {
  let service: QuizserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
