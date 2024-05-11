import { TestBed } from '@angular/core/testing';

import { SynonymapiService } from './synonymapi.service';

describe('SynonymapiService', () => {
  let service: SynonymapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynonymapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
