import { TestBed } from '@angular/core/testing';

import { PotencialidadesService } from './potencialidades.service';

describe('PotencialidadesService', () => {
  let service: PotencialidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotencialidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
