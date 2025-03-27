import { TestBed } from '@angular/core/testing';

import { AdminAuthgurdService } from './admin-authgurd.service';

describe('AdminAuthgurdService', () => {
  let service: AdminAuthgurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthgurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
