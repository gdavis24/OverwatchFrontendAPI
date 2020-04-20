import { TestBed } from '@angular/core/testing';

import { OverwatchstatsService } from './overwatchstats.service';

describe('OverwatchstatsService', () => {
  let service: OverwatchstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverwatchstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
