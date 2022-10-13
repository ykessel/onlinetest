import { TestBed } from '@angular/core/testing';

import { RutaAccesoGuard } from './ruta-acceso.guard';

describe('RutaAccesoGuard', () => {
  let guard: RutaAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RutaAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
