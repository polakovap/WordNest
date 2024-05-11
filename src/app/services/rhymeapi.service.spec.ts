import { TestBed } from '@angular/core/testing';

import { RhymeapiService } from './rhymeapi.service';

describe('RhymeapiService', () => {
  let service: RhymeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhymeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
