import { TestBed } from '@angular/core/testing';

import { CategoriasEnlaceService } from './categorias-enlace.service';

describe('CategoriasEnlaceService', () => {
  let service: CategoriasEnlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasEnlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
