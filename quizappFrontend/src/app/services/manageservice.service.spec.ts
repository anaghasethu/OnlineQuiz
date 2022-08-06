import { TestBed } from '@angular/core/testing';

import { ManageserviceService } from './manageservice.service';

describe('ManageserviceService', () => {
  let service: ManageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
