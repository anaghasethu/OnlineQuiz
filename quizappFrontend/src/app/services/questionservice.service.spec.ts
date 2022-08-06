import { TestBed } from '@angular/core/testing';

import { QuestionserviceService } from './questionservice.service';

describe('QuestionserviceService', () => {
  let service: QuestionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
