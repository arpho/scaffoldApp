import { TestBed } from '@angular/core/testing';

import { KempelenServiceService } from './kempelen-service.service';

describe('KempelenServiceService', () => {
  let service: KempelenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KempelenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
