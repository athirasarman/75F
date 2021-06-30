import { TestBed } from '@angular/core/testing';

import { SharedSubjectsService } from './shared-subjects.service';

describe('SharedSubjectsService', () => {
  let service: SharedSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
