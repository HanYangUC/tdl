import { TestBed } from '@angular/core/testing';

import { TdlSvcService } from './tdl-svc.service';

describe('TdlSvcService', () => {
  let service: TdlSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdlSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
