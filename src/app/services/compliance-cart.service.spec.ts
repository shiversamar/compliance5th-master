import { TestBed, inject } from '@angular/core/testing';

import { ComplianceCartService } from './compliance-cart.service';

describe('ComplianceCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplianceCartService]
    });
  });

  it('should be created', inject([ComplianceCartService], (service: ComplianceCartService) => {
    expect(service).toBeTruthy();
  }));
});
