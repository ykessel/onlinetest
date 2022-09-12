import { TestBed } from '@angular/core/testing';

import { DatosContactoService } from './datos-contacto.service';

describe('DatosContactoService', () => {
  let service: DatosContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
