import { TestBed } from '@angular/core/testing';

import { ControlSocketsService } from './control-sockets.service';

describe('ControlSocketsService', () => {
  let service: ControlSocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlSocketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
