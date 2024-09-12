import { TestBed } from '@angular/core/testing';

import { MovilidadService } from './movilidad.service';

describe('MovilidadService', () => {
  let service: MovilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
