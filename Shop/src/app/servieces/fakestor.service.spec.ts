import { TestBed } from '@angular/core/testing';

import { FakestorService } from './fakestor.service';

describe('FakestorService', () => {
  let service: FakestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
