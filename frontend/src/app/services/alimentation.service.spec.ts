import { TestBed } from '@angular/core/testing';

import { AlimentationService } from './alimentation.service';

describe('AlimentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentationService = TestBed.get(AlimentationService);
    expect(service).toBeTruthy();
  });
});
