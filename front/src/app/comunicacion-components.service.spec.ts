import { TestBed } from '@angular/core/testing';

import { ComunicacionComponentsService } from './comunicacion-components.service';

describe('ComunicacionComponentsService', () => {
  let service: ComunicacionComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
