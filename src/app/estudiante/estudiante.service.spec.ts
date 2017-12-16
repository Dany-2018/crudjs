/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstudianteService } from './estudiante.service';

describe('EstudianteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudianteService]
    });
  });

  it('should ...', inject([EstudianteService], (service: EstudianteService) => {
    expect(service).toBeTruthy();
  }));
});
