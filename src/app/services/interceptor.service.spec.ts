import { TestBed, inject } from '@angular/core/testing';

import { IntercepterService } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntercepterService]
    });
  });

  it('should be created', inject([IntercepterService], (service: IntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
