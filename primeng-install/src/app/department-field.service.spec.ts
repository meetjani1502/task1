import { TestBed } from '@angular/core/testing';

import { DepartmentFieldService } from './department-field.service';

describe('DepartmentFieldService', () => {
  let service: DepartmentFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
