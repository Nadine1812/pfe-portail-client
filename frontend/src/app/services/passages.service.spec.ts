import { TestBed } from '@angular/core/testing';

import { PassagesService } from './passages.service';

describe('PassagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassagesService = TestBed.get(PassagesService);
    expect(service).toBeTruthy();
  });
});
