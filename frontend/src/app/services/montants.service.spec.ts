import { TestBed } from '@angular/core/testing';

import { MontantsService } from './montants.service';

describe('MontantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MontantsService = TestBed.get(MontantsService);
    expect(service).toBeTruthy();
  });
});
