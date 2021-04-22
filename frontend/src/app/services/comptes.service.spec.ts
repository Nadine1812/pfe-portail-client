import { TestBed } from '@angular/core/testing';

import { ComptesService } from './comptes.service';

describe('ComptesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComptesService = TestBed.get(ComptesService);
    expect(service).toBeTruthy();
  });
});
