import { TestBed } from '@angular/core/testing';

import { AffichageService } from './affichage.service';

describe('AffichageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffichageService = TestBed.get(AffichageService);
    expect(service).toBeTruthy();
  });
});
