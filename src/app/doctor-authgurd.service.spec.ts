import { TestBed } from '@angular/core/testing';

import { DoctorAuthgurdService } from './doctor-authgurd.service';

describe('DoctorAuthgurdService', () => {
  let service: DoctorAuthgurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAuthgurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
