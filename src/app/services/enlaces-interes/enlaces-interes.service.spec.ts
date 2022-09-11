import { TestBed } from '@angular/core/testing';

import { EnlacesInteresService } from './enlaces-interes.service';

describe('EnlacesInteresService', () => {
  let service: EnlacesInteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlacesInteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
