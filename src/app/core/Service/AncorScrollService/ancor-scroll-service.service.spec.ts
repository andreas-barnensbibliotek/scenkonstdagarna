import { TestBed } from '@angular/core/testing';

import { AncorScrollServiceService } from './ancor-scroll-service.service';

describe('AncorScrollServiceService', () => {
  let service: AncorScrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncorScrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
