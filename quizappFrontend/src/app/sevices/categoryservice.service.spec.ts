import { TestBed } from '@angular/core/testing';

import { CategoryserviceService } from './categoryservice.service';

describe('CategoryserviceService', () => {
  let service: CategoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
